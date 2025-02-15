import { Injectable } from '@angular/core';
import { ApiService } from './api-service';
import { HttpClient } from '@angular/common/http';
import { DisorderResponse } from '../types';
//INSERIDO POR LAURA
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranstornoService {
  private baseUrl: string = "http://localhost:8080/api";

  constructor(private http: HttpClient) {}

  // public getTranstornos() {
  //     return this.http.get<DisorderResponse[]>(`${this.baseUrl}`);
  // }

  public getTranstorno(id:number) {
    return this.http.get<DisorderResponse>(`${this.baseUrl}/${id}`);
  }
}
