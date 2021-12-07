import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import {problemSer} from '../interface/problem.interface';
import { map, catchError } from 'rxjs/operators';

const baseUrl = 'http://localhost:8080/service';


@Injectable({
  providedIn: 'root'
})
export class ProblemService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }


  getAll(): Observable<problemSer>  {
    return this.http.get<problemSer>(baseUrl);
  }

  get(id: any): Observable<problemSer> {
    return this.http.get<problemSer>(`${baseUrl}/${id}`)
  }

  update(id: any, data: any) {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  create(data: any) {
    return this.http.post(baseUrl, data);
  }

  createCause(id: any, data: any) {
    return this.http.post(`${baseUrl}/${id}/cause`, data);
  }

  createSolution(id: any, data: any) {
    return this.http.post(`${baseUrl}/${id}/solution`, data);
  }
/*
  delete(id: any) {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll() {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any) {
    return this.http.get(`${baseUrl}?title=${title}`);
  }*/
}