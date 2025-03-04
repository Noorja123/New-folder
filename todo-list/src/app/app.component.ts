import { Component } from '@angular/core';
import { TodoComponent } from './components/todo/todo.component';


@Component({
  selector: 'app-todo',
  standalone: true,  //  Enables standalone component
  imports: [TodoComponent],  //  Import child components
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'todo-list';
}