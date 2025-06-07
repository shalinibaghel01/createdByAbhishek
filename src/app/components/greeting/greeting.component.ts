import { Component, input } from '@angular/core';

@Component({
  selector: 'app-greeting',
  imports: [],
  templateUrl: './greeting.component.html',
  styleUrl: './greeting.component.css'
})



export class GreetingComponent {
message=input('default message from greetings class !');
}
