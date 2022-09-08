import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {IStudent} from '../../model/IStudent';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {StudentServiceService} from '../service/student-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {
  studentForm: FormGroup;

  constructor(private studentService: StudentServiceService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.studentForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required]),
      avatar: new FormControl(),
      mark: new FormControl('', [Validators.required])
    });
  }

  createStudent() {
    this.studentService.createStudent(this.studentForm.value);
    this.router.navigateByUrl('');
  }

}
