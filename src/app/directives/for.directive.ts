import { Directive } from '@angular/core';

@Directive({
  selector: '[Myfor]'
})
export class ForDirective {

  constructor() {
    console.log('Myfor')
   }

}
