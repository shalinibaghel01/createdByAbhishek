import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

value=0;


increment(){
this.value+=1;
}

decrement(){
this.value-=1;
}

reset(){
this.value=0;
}




}
