import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {TodoService} from '../service/todo.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Todo} from '../todo';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {
  editForm: FormGroup;
  todo: Todo;
  id: number;

  constructor(private todoService: TodoService, private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.editForm = new FormGroup({
      id: new FormControl(),
      content: new FormControl()
    });

    this.activatedRoute.paramMap.subscribe((param: ParamMap) => {
      this.id = +param.get('id');
      this.todoService.findById(this.id).subscribe((data) => {
        this.todo = data;
      });
    });
  }

  updateTodo(id: number) {
    this.todo = this.editForm.value;
    this.todoService.updateTodo(id, this.todo).subscribe(
      () => {},
      () => {},
      () => {this.router.navigateByUrl(''); }
    );
  }

}
