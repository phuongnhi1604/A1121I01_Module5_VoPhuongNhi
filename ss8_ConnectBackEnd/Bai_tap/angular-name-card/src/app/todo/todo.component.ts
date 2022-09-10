import {Component, OnInit} from '@angular/core';
import {Todo} from '../todo';
import {FormControl} from '@angular/forms';
import {TodoService} from '../service/todo.service';


// tslint:disable-next-line:variable-name
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  content = new FormControl();

  constructor(private todoService: TodoService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.todoService.getAll().subscribe((todos) => {
      this.todos = todos;
    });
  }

  change() {
    const value = this.content.value;
    this.todoService.saveToDo(value).subscribe(
      () => {
      },
      () => {
      },
      () => {
        this.getAll();
        this.content.reset();
      }
    );
  }

  toggleTodo(i: number) {
    this.todos[i].complete = !this.todos[i].complete;
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo(id).subscribe(
      () => {},
    () => {},
    () => {this.getAll(); }
  );
  }
}
