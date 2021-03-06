import { Component, OnInit } from '@angular/core';
import School from 'src/app/model/school.model';
import Student from 'src/app/model/student.model';
import { SchoolService } from 'src/app/services/school.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass'],
})
export class MainComponent implements OnInit {
  public students: Student[] = [];
  public schools: School[] = [];

  constructor(
    private studentService: StudentService,
    private schoolService: SchoolService
  ) {}

  ngOnInit(): void {
    this.studentService.getAll().subscribe((students) => {
      this.students = students;
    });
    this.schoolService.getAll().subscribe((schools) => {
      this.schools = schools;
    });
  }

  public removeSchool(removeSchoolEvent: any): void {
    let id = removeSchoolEvent;
    this.schoolService.remove(id).subscribe();
    this.schools = this.schools.filter((s) => s.id != id);
    this.students = this.students.filter((s) => s.schoolId != id);
  }
}
