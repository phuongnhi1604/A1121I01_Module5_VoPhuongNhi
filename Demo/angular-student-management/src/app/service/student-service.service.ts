import { Injectable } from '@angular/core';
import {IStudent} from '../../model/IStudent';
import {StudentDAO} from '../data/StudentDAO';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  constructor() { }
  createStudent(student: IStudent) {
    StudentDAO.students.unshift(student);
  }

  editStudent() {

  }
  deleteStudent(student: IStudent) {
    // StudentDao.students.;
  }

  getAllStudent() {
    return StudentDAO.getAllStudent();
  }

  findByID(id: number) {
    // tslint:disable-next-line:triple-equals
    return StudentDAO.students.find((stud) => stud.id == id);
  }
}
