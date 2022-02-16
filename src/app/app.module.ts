import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SchoolComponent } from './components/school/school.component';
import { SchoolListComponent } from './components/school/school-list/school-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateSchoolComponent } from './components/school/create-school/create-school.component';
import { FormsModule } from '@angular/forms';
import { StudentListComponent } from './components/student/student-list/student-list.component';
import { StudentComponent } from './components/student/student.component';
import { CreateStudentComponent } from './components/student/create-student/create-student.component';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    SchoolComponent,
    SchoolListComponent,
    CreateSchoolComponent,
    StudentListComponent,
    StudentComponent,
    CreateStudentComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
