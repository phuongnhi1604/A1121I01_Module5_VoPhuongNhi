import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IStudent} from '../../model/IStudent';
import {StudentDAO} from '../data/StudentDAO';
import {StudentServiceService} from '../service/student-service.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  constructor(private studentService: StudentServiceService) { }
  students: IStudent[] = [];
  temp: IStudent = {};

  ngOnInit(): void {
    this.students = this.studentService.getAllStudent();
  }

  submit(student: IStudent) {
    this.students.push(student);
  }
}
