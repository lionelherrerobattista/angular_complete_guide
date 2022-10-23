import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any): any {
    if(value){
      value = value.split('').reverse().join('');
    }
    return value;
  }
}
