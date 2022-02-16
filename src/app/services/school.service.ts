import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import School from '../model/school.model';
import CreateSchool from '../model/create-school.model';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  apiUrl: string = 'https://localhost:7036/school';

  constructor(private httpClient: HttpClient) { }

  public getAll() : Observable<School[]> {
    return this.httpClient.get<School[]>(this.apiUrl)
  }

  public remove(id: number) : Observable<any> {
    return this.httpClient.delete<any>(`${this.apiUrl}/${id}`)
  }

  public create(createSchool: CreateSchool) : Observable<number> {
    return this.httpClient.post<number>(this.apiUrl, createSchool)
  }
}
