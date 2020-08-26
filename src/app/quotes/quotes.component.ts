import { Component, OnInit } from '@angular/core';
import { Quote} from '../quote';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, 'Nicole', 'Challenges of life', 'Challenges in life come in three broad categories;easy,difficult and impossible.Those who take on only the easy have safe and boring life.Those who take on the difficult have tough but satisfying life and those who take on impossible are always remembered.', 'Sangeeta Lal Ramnani', new Date(2020,06,18)),
    new Quote(2, 'Talia', 'Tech Quote', 'Technology is always a two-edged sword.It will bring in many benefits, but also many disasters', 'Alan Moore', new Date(2019,09,11)),
    new Quote(3, 'Milcah', 'Funny Science and Technology', 'If you cant explain it simply,you dont understand it well enough', 'Albert Einstein', new Date(2020,02,08)),
  ];
  constructor() { }

  ngOnInit() {
  }

}
