import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment2';
  username = '';
  usernameIsEmpty = true;


  onUpdateUsername(event: Event){
    this.usernameIsEmpty = (<HTMLInputElement>event.target).value.length === 0;
  }

  onReset(){
    this.username = '';
    this.usernameIsEmpty = true;
  } 
}
