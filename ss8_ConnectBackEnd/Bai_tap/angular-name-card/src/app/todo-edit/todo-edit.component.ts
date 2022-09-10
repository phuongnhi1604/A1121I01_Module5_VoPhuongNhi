import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {TodoService} from '../service/todo.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Todo} from '../todo';
import {validate} from 'codelyzer/walkerFactory/walkerFn';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {
  editContent = new FormControl();
  todoEdit: Todo = {};
  id: number;

  constructor(private todoService: TodoService, private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param: ParamMap) => {
      this.id = +param.get('id');
      this.todoService.findById(this.id).subscribe((data) => {
        this.todoEdit = data;
      });
    });
  }

  updateTodo() {
    const contentValue = this.editContent.value;
    const todo: Todo = {
      id: this.id,
      content: contentValue,
      complete: false
    };
    this.todoService.updateTodo(todo.id, todo);
    this.router.navigateByUrl('');
  }

}
