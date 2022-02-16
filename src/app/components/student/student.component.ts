import { Component, Input, OnInit, Output } from '@angular/core';
import CreateStudent from 'src/app/model/create-student.model';
import School from 'src/app/model/school.model';
import Student from 'src/app/model/student.model';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.sass'],
})
export class StudentComponent implements OnInit {
  @Input() students: Student[] = [];
  @Output() schools: School[] = [];

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.studentService.getAll().subscribe((studentData) => {
      this.students = studentData;
    });
  }

  public removeStudent(removeStudentEvent: any): void {
    let id = removeStudentEvent;
    this.studentService.remove(id).subscribe(() => {
      this.students = this.students.filter((s) => s.id != id);
    });
  }

  public createStudent(createStudentEvent: any): void {
    let createStudent: CreateStudent = {
      firstName: createStudentEvent.firstName,
      lastName: createStudentEvent.lastName,
      schoolId: createStudentEvent.schoolId,
    };

    this.studentService.create(createStudent).subscribe((studentId) => {
      this.studentService.getById(studentId).subscribe((student) => {
        this.students.push(student);
      });
    });
  }

  public getCurrentSchools(): School[] {
    return this.schools;
  }
}
