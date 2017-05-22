
import { Component } from '@angular/core';

class Task {
  name: string
  complete: boolean = false;
}

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  tasks: Task[] = [];
  newTaskDescription: string

  addTask() {
    let task = {
      name: this.newTaskDescription,
      complete: false
    };
    this.tasks.push(task);
    this.newTaskDescription = '';
  }

  toggleComplete(task) {
    task.complete = !task.complete;
  }
}
