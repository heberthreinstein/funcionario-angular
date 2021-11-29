import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  constructor(private http: HttpClient) { }

  getAllFuncionarios(): Observable<any>{
    return this.http.get("http://localhost:8080/api/v1/funcionario");
  }
}
