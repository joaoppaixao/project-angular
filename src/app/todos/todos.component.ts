import { Component, OnInit } from '@angular/core';
import { ApiService, Todo } from '../api.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  newTodo: Todo = { id: 0, title:'', completed: false};
  constructor(private ApiService: ApiService) {}

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos(){
    this.ApiService.getTodos().subscribe(data => {
      this.todos = data;
    });

    
  }
}
