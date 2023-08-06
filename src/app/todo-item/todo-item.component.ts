import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import type { Todo } from '../todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  // Входное свойство  для получения задачи из родительского компонента
  @Input() todo!: Todo;
  // События которые будут отправлять задачу, которую нужно удалить или у которой нужно изменить статус
  @Output() delete = new EventEmitter<number>();
  @Output() toggle = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  // Обработчик кнопки delete, который вызывает событие delete
  onDelete(): void { 
    this.delete.emit(this.todo.id);
  }

  onToggle(): void {
    this.toggle.emit(this.todo.id);
  }
}
