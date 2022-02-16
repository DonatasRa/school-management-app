import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import CreateStudent from '../model/create-student.model';
import Student from '../model/student.model';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  apiUrl: string = 'https://localhost:7036/student';

  constructor(private httpClient: HttpClient) {}

  public getAll(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.apiUrl);
  }

  public getById(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}/${id}`);
  }

  public remove(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.apiUrl}/${id}`);
  }

  public create(createStudent: CreateStudent): Observable<any> {
    return this.httpClient.post<any>(this.apiUrl, createStudent);
  }
}
