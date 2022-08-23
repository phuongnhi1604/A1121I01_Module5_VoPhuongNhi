import { Component, OnInit } from '@angular/core';
import {IStudent} from '../../model/IStudent';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  student: IStudent = {
    id: 1,
    name: 'Phương Nhi',
    address: 'Đà Nẵng',
    age: 21,
    mark: 6,
    // tslint:disable-next-line:max-line-length
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8v3UolyZlLPX6ONi-eQM4evITTOUINtHGfnAdooonCYVFv0MBAzvoL6jwpSJpyUe3Lmc&usqp=CAU'
  };
  constructor() { }

  ngOnInit(): void {
  }
  changeMark(target): void {
    this.student.mark = target;
  }
}
