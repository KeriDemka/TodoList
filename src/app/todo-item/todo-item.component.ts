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
  @Output() update = new EventEmitter();

  editEnabled: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  // Обработчик кнопки 'удалить', который вызывает событие delete
  onDelete(): void { 
    this.delete.emit(this.todo.id);
  }

  onCompleted(): void {
    this.update.emit();
  }

  onToggleEdit(): void {
    this.editEnabled = !this.editEnabled;
    this.update.emit();
  }
}
