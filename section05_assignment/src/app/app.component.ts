import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers: Array<number>;
  evenNumbers: Array<number>;

  constructor(){
    this.oddNumbers = [];
    this.evenNumbers = [];
  }

  onGameStarted(number:number){
    console.log("Number >> ", number);

    if(number % 2 === 0){
      this.evenNumbers.push(number);
      console.log("Even");
    } else {
      this.oddNumbers.push(number);
      console.log("Odd");
    }
  }
}
