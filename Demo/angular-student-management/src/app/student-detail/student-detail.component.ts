import {Component, Input, OnInit} from '@angular/core';
import {IStudent} from '../../model/IStudent';
import {StudentServiceService} from '../service/student-service.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  student: IStudent | undefined;
  constructor(private studentService: StudentServiceService,
              private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe((param) => {
      // tslint:disable-next-line:radix
      const id = parseInt(param.get('id'));
      this.student = this.studentService.findByID(id);
    });
  }
  changeMark(target): void {
    this.student.mark = target;
  }
}
