import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import School from 'src/app/model/school.model';
import Student from 'src/app/model/student.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.sass'],
})
export class StudentListComponent implements OnInit {
  @Input() studentInput: Student[] = [];
  @Output() removeStudentEvent = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  public removeStudent(studentId: number) {
    this.removeStudentEvent.emit(studentId);
  }
}
