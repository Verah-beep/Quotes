import { Component, OnInit } from '@angular/core';
import { Quote} from '../quote';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  

  quotes: Quote[] = [
    new Quote(1, 'Success and Technology....', 'The technology you use impresses no one.The experience you create with it is everything.', 'Vera Auma', new Date(2020,8,18)),
    new Quote(2, 'Motivational Quotes', 'Success is a lousy teacher.It seduces smart people into thinking they cant lose.', 'Nicole Atieno', new Date(2020,8,18)),
    new Quote(3, 'Funny Science and Technology', 'If you cant explain it simply,you dont understand it well enough', new Date(2020,8,18))
  ];

  toggleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)
      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }


  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  addVote(quote, index) {
    if (quote) {
      this.quotes[index].upvote += 1;
    }
  }
  lessVote(quote, index) {
    if (quote) {
      this.quotes[index].downvote += 1
    }
  }
  initNum: number
  finNum: number
  counter: number

  mostLiked() {
    this.initNum = 0
    this.finNum = 0
    for (this.counter = 0; this.counter < this.quotes.length; this.counter++) {
      this.finNum = this.quotes[this.counter].upvote;

      if (this.finNum > this.initNum) {
        this.initNum = this.finNum
      }



    }

    return this.initNum;
  }

  constructor() { }

  ngOnInit() {
  }

}
