import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent implements OnInit {
  taskArray = [
    {
      taskName: 'Tarea Inicial',
      taskDescription: 'Descripcion tarea inicial',
      isCompleted: false,
      isEditable: false,
    },
  ];

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    this.taskArray.push({
      taskName: form.controls['task'].value,
      taskDescription: form.controls['taskDescription'].value,
      isCompleted: false,
      isEditable: false,
    });

    form.reset();
  }

  onCheck(index: number) {
    this.taskArray[index].isCompleted = !this.taskArray[index].isCompleted;
  }

  onEdit(index: number) {
    this.taskArray[index].isEditable = true;
  }

  onSave(index: number) {
    this.taskArray[index].isEditable = false;
  }

  onDelete(index: number) {
    this.taskArray.splice(index, 1);
  }
}
