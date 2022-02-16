import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import CreateStudent from 'src/app/model/create-student.model';
import School from 'src/app/model/school.model';
import { SchoolService } from 'src/app/services/school.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.sass'],
})
export class CreateStudentComponent implements OnInit {
  @Input() schoolsInput: School[] = [];
  @Output() createStudentEvent = new EventEmitter<CreateStudent>();
  @Output() getSchoolsEvent = new EventEmitter<any>();

  // public schools: School[] = [];
  public newStudent: CreateStudent = {
    firstName: '',
    lastName: '',
    schoolId: 0,
  };

  constructor(private schoolService: SchoolService) {}

  ngOnInit(): void {
    this.schoolService.getAll().subscribe((schoolData) => {
      this.schoolsInput = schoolData;
    });
  }

  public createStudent() {
    this.createStudentEvent.emit(this.newStudent);
    this.newStudent = {
      firstName: '',
      lastName: '',
      schoolId: 0,
    };
  }
}
