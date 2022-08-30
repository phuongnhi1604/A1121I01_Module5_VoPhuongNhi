import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IStudent} from '../../model/IStudent';
import {StudentDAO} from '../data/StudentDAO';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  constructor() { }
  students: IStudent[] = StudentDAO.getAllStudent();
  temp: IStudent = {};

  ngOnInit(): void {
  }

  submit(student: IStudent) {
    this.students.push(student);
  }
}
