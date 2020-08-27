import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { CountInputComponent } from './count-input/count-input.component';
import { QuoteDetailComponent } from './quotes-details/quotes-details.component';
import { QuoteFormComponent } from './quotes-form/quotes-form.component';
import { DateCountPipe } from './date-count.pipe';

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    CountInputComponent,
    QuoteDetailComponent,
    QuoteFormComponent,
    DateCountPipe
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
