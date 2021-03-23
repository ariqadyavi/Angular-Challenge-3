import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent{

  todos: any;
  todoObj: any;
  newTodo: string;

  artists: any;
  artistObj: any;
  newArtist: string;

  durations: any;
  durationObj: any;
  newDuration: string;

  show = false;

  constructor(){
    this.newTodo = '';
    this.todos = [];
    this.newArtist = '';
    this.artists = [];
    this.newDuration = '';
    this.durations = [];
  }

  addTodo(event: { preventDefault: () => void; }) {
    this.todoObj = {
      newTodo: this.newTodo,
      completed: false
    }
    this.todos.push(this.todoObj);
    this.newTodo = '';
    event.preventDefault();
  }

  addArtist(event: { preventDefault: () => void; }) {
    this.artistObj = {
      newArtist: this.newArtist,
      completed: false
    }
    this.artists.push(this.artistObj);
    this.newArtist = '';
    event.preventDefault();
  }

  addDuration(event: { preventDefault: () => void; }) {
    this.durationObj = {
      newDuration: this.newDuration,
      completed: false
    }
    this.durations.push(this.durationObj);
    this.newDuration = '';
    event.preventDefault();
  }

  deleteTodo(index: any) {
    this.todos.splice(index, 1);
  }

  deleteArtist(index: any){
    this.artists.splice(index, 1);
  }

  deleteDuration(index: any){
    this.durations.splice(index, 1);
  }

}
