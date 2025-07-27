import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { QuoteService } from "../quote.service";

@Component({
  selector: "app-quote-of-the-day",
  templateUrl: "./quote-of-the-day.component.html",
  styleUrls: ["./quote-of-the-day.component.css"],
})
export class QuoteOfTheDayComponent implements OnInit {
  quote$: Observable<string>;

  constructor(private quoteService: QuoteService) {}

  ngOnInit() {
    this.quote$ = this.quoteService.getQuote();
  }
}
