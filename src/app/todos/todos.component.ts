import { Component, OnInit } from '@angular/core';
import { Todo, TodoService } from '../todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];

  // Свойство для двусторонней привязки к полю ввода
  newTodo: string = '';

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
  }

  addTodo(title: string): void {
    if (!title) return;
    const todo: Todo = {
      id: Date.now(),
      title,
      completed: false
    };
    this.todoService.addTodo(todo);
    this.newTodo = '';
  }

  deleteTodo(id: number): void {
    this.todoService.deleteTodo(id);
  }

  updateTodo(): void {
    this.todoService.updateLocalStorage();
  }
}
