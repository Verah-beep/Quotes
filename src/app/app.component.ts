import { Component } from '@angular/core';
import { Quote } from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes: Quote[] = [
    new Quote(1, 'Success is a lousy teacher.It seduces smart people into thinking they cant lose.', 'Vera Auma', new Date(2020,8,18)),
    new Quote(2, 'The technology you use impresses no one.The experience you create with it is everything.', 'Nicole', new Date(2020,8,18)),
    new Quote(3, 'Challenges in life come in three broad categories;easy,difficult and impossible.Those who take on only the easy have safe and boring life.Those who take on the difficult have tough but satisfying life and those who take on impossible are always remembered.', 'Talia', new Date(2020,8,18))
  ];
}
