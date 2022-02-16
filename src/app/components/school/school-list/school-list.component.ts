import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import School from '../../../model/school.model';

@Component({
  selector: 'app-school-list',
  templateUrl: './school-list.component.html',
  styleUrls: ['./school-list.component.sass'],
})
export class SchoolListComponent implements OnInit {
  @Input() schoolInput: School[] = [];
  @Output() removeSchoolEvent = new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {}

  public removeSchool(schoolId: number) {
    this.removeSchoolEvent.emit(schoolId);
  }
}
