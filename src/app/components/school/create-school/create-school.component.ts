import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create-school',
  templateUrl: './create-school.component.html',
  styleUrls: ['./create-school.component.sass'],
})
export class CreateSchoolComponent implements OnInit {
  @Output() createSchoolEvent = new EventEmitter<string>();
  public schoolName: string = '';

  constructor() {}

  ngOnInit(): void {}

  public createSchool() {
    this.createSchoolEvent.emit(this.schoolName);
    this.schoolName = '';
  }
}
