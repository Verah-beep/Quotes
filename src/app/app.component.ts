import { Component } from '@angular/core';
import { Quote } from './quote';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes: Quote[] = [
    new Quote
    new Quote(2, 'Talia', 'Tech Quote', 'Technology is always a two-edged sword.It will bring in many benefits, but also many disasters', 'Alan Moore', new Date(2019, 09, 11)),
    new Quote(3, 'Milcah', 'Funny Science and Technology', 'If you cant explain it simply,you dont understand it well enough', 'Albert Einstein', new Date(2020, 02, 08)),
  ];
}
