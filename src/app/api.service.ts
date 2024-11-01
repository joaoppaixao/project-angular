import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
private apiUrl = 'https://jsonplaceholder.typicode.com/todos';
 constructor (private http: HttpClient) {}

 getTodos(): Observable<Todo[]>{
  return this.http.get<Todo[]>(this.apiUrl)
 }

 addTodos(todo: Todo): Observable<Todo[]>{
  return this.http.post<Todo[]>(this.apiUrl, todo);
 }

 updateTodos(todo: Todo): Observable<Todo[]>{
  return this.http.put<Todo[]>('$(this.apiUrl)/$, todo.id)', todo);
 }

 deleteTodos(todo: Todo): Observable<Todo[]>{
  return this.http.delete<Todo[]>('$(this.apiUrl)/$, todo.id)/$todo)');
 }
}
