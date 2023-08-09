import { Injectable } from '@angular/core';

// Определение интерфейса для задачи
export interface Todo {
  id: number;
  title: string; // название задачи
  completed: boolean; // статус завершенности задачи
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  // массив задач; получаем данные из localStorage или используем пустой массив
  todos: Todo[] = JSON.parse(localStorage.getItem('todos') || '[]');

  getTodos(): Todo[] {
    return this.todos;
  }

  // добавление новой задачи в массив и обновление localStorage
  addTodo(todo: Todo): void {
    this.todos.push(todo);
    this.updateLocalStorage();
  }

  // удаление задачи из массива и обновление localStorage
  deleteTodo(id: number): void {
    const findIndex = this.todos.findIndex((todo) => todo.id === id)
    
    if (findIndex !== -1) {
      this.todos.splice(findIndex, 1)
    }
    
    this.updateLocalStorage();
  }

  updateLocalStorage(): void {
    localStorage.setItem('todos', JSON.stringify(this.todos))
  }

  constructor() { }
}
