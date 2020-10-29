import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatrimonioServiceService {

  constructor(private http : HttpClient) { }

  public get():Observable<any>{
    return this.http.get("http://localhost:8080/patrimonios");
  }

  public getById(id):Observable<any>{
    return this.http.get(`http://localhost:8080/patrimonios/${id}`);
  }

  public post(patrimonio: {id, descricao, tamanho, logradouro, rua, lote, quadra}) : Observable<any>{
    return this.http.post("http://localhost:8080/patrimonios", patrimonio);
  }

  public delete(id):Observable<any>{
    return this.http.delete(`http://localhost:8080/patrimonios/${id}`);
  }
}
