import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {IStudent} from '../../model/IStudent';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {
  @Output() submitCreate = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  addStudent(id: string, name: string, address: string, age: string, avatar: string, mark: string) {
    const student: IStudent = {
      // tslint:disable-next-line:radix
      id: parseInt(id),
      name,
      address,
      // tslint:disable-next-line:radix
      age: parseInt(age),
      avatar,
      // tslint:disable-next-line:radix
      mark: parseInt(mark)
    };
    this.submitCreate.emit(student);
  }

}
