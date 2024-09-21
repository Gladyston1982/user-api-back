iimport { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:5000/api/users';

  constructor(private http: HttpClient) {}

  // Método para listar todos os usuários
  getUsers(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Método para criar um novo usuário
  createUser(userData: any): Observable<any> {
    return this.http.post(this.apiUrl, userData);
  }

  // Método para atualizar um usuário
  updateUser(id: string, userData: any): Observable<any> {
    return this.http.put(${this.apiUrl}/${id}, userData);
  }
}