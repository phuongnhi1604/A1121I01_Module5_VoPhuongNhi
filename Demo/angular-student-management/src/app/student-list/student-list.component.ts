import { Component, OnInit } from '@angular/core';
import {IStudent} from '../../model/IStudent';
import {StudentDAO} from '../data/StudentDAO';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students: IStudent[] = StudentDAO.getAllStudent();
  constructor() { }

  ngOnInit(): void {
  }

}
