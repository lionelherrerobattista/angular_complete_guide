import { Injectable } from "@angular/core";

@Injectable()
export class CounterService {
    activeToInactive:number;
    inactiveToActive:number;

    constructor(){
        this.activeToInactive = 0;
        this.inactiveToActive = 0;
    }

    addActiveToInactive(){
        this.activeToInactive++;
        console.log("Active to Inactive ops: ", this.activeToInactive);
    }

    addInactiveToActive(){
        this.inactiveToActive++;
        console.log("Inactive to Active ops: ", this.inactiveToActive);
    }

}