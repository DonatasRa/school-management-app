import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import CreateSchool from 'src/app/model/create-school.model';
import School from '../../model/school.model';
import { SchoolService } from '../../services/school.service';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.sass'],
})
export class SchoolComponent implements OnInit {
  @Input() schools: School[] = [];
  @Output() removeSchoolEvent = new EventEmitter<string>();

  constructor(private schoolService: SchoolService) {}

  ngOnInit(): void {
    this.schoolService.getAll().subscribe(
      (schoolData) => {
        this.schools = schoolData;
      },
      (error) => {
        //Handle the error here
        //If not handled, then throw it
        throw error;
      }
    );
  }

  public removeSchool(schoolId: any): void {
    this.removeSchoolEvent.emit(schoolId);
  }

  public createSchool(createSchoolEvent: any): void {
    let createSchool: CreateSchool = {
      name: createSchoolEvent,
    };

    this.schoolService.create(createSchool).subscribe((schoolId) => {
      let school: School = {
        id: schoolId,
        name: createSchool.name,
      };

      this.schools.push(school);
    });
  }
}
