import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment3';
  showParagraph = false;
  //clicks:Array<number> = [];
  clicks:Array<Date> = [];
  //counter = 0;

  onDisplayClick(){
    this.showParagraph = !this.showParagraph;
    //this.counter += 1;
    //this.clicks.push(this.counter);
    this.clicks.push(new Date());
  }

  getColor(click:number){
    return click >= 4 ? 'blue' : 'transparent';
  }
}
