import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes: Quote[] = [
      new Quote(1, 'Nicole', 'Challenges of life', 'Challenges in life come in three broad categories;easy,difficult and impossible.Those who take on only the easy have safe and boring life.Those who take on the difficult have tough but satisfying life and those who take on impossible are always remembered.', 'Sangeeta Lal Ramnani', new Date(2020,8,20)),
      // new Quote(2, 'Talia', 'Tech Quote', 'Technology is always a two-edged sword.It will bring in many benefits, but also many disasters', 'Alan Moore', new Date(2019, 09, 11), 0, 0),
      // new Quote(3, 'Milcah', 'Funny Science and Technology', 'If you cant explain it simply,you dont understand it well enough', 'Albert Einstein', new Date(2020, 02, 08), 0, 0),
      // new Quote(4, 'Lovine', 'Success and Technology....', 'The technology you use impresses no one.The experience you create with it is everything.', 'Sean Gerety', new Date(2019, 06, 23), 0, 0),
      // new Quote(5, 'Kelvin', 'Motivational Quotes', 'Success is a lousy teacher.It seduces smart people into thinking they cant lose.', 'Bill Gates', new Date(2020, 02, 08), 0, 0),
  ]
  constructor() { }

  ngOnInit() {
  }

}
