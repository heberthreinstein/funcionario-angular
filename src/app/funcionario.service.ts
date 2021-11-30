import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  constructor(private http: HttpClient) { }

  getAllFuncionarios(): Observable<any>{
    return this.http.get("http://localhost:8080/api/v1/funcionario")
  }

  saveFuncionario(funcionario: any){
    if(funcionario.id){
      return this.http.put("http://localhost:8080/api/v1/funcionario",funcionario);
    } else return this.http.post("http://localhost:8080/api/v1/funcionario",funcionario);
  }

  deleteFuncionario(id: number){
    return this.http.delete("http://localhost:8080/api/v1/funcionario?id="+ id);
  }
}
