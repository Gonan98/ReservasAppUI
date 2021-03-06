import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private baseURL = 'http://localhost:8080/api/clientes';

  constructor(private http: HttpClient) { }

  createCliente(cliente: Object): Observable<Object>{
    return this.http.post(`${this.baseURL}`, cliente);
  }

  updateCliente(id: number, cliente: Object): Observable<Object>{
    return this.http.put(`${this.baseURL}/${id}`, cliente)
  }

  deleteCliente(id: number): Observable<any>{
    return this.http.delete(`${this.baseURL}/${id}`, {responseType:'text'});
  }

  getClienteList(): Observable<any>{
    return this.http.get(`${this.baseURL}`);
  }

  getClienteById(id: number): Observable<any>{
    return this.http.get(`${this.baseURL}/${id}`);
  }

  getClienteByDni(dni: string): Observable<any>{
    return this.http.get(`${this.baseURL}/searchByDni/${dni}`);
  }

  getClienteByApellidos(apellidos: string): Observable<any>{
    return this.http.get(`${this.baseURL}/searchByApellidos/${apellidos}`);
  }
}
