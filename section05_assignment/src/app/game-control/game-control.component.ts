import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  
  intervalId: ReturnType<typeof setInterval>;
  number: number;
  @Output() gameStarted: EventEmitter<number>;

  constructor() {
    this.number = 0;
    this.gameStarted = new EventEmitter();
  }

  ngOnInit(): void {

  }

  /**
   * Starts interval and auto increments number.
   */
  startGame(){
    console.log("Game started");
    this.intervalId = setInterval(()=> {
      this.number += 1;
      //Emit event each second:
      this.gameStarted.emit(this.number);
    }, 1 * 1000)
  }

  /**
   * Stops interval.
   */
  stopGame(){
    console.log("Game stopped");
    clearInterval(this.intervalId);
  }

}
