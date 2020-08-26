import { Component, OnInit } from '@angular/core';
import { Quote} from '../quote';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  

  quotes: Quote[] = [
    new Quote(1, 'No one cares about your struggles and failures but everyone carse about your success and achievements', 'Lovine Oduor', new Date(2020,6,15)),
    new Quote(2, 'Difficulties in your life do not come to destroy you but to help you realize your potential and future', 'Rihannah', new Date(2020,6,15)),
    new Quote(3, 'Success is a battle located in the brain that only the relentless can survive', 'Lovine Oduor', new Date(2020,6,15))
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
