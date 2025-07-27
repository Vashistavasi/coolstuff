import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class QuoteService {
  private readonly quotes: string[] = [
    "It's not a bug – it's an undocumented feature.",
    "I don't always test my code, but when I do, I do it in production.",
    "To err is human, to blame it on a computer is even more so.",
    "There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.",
    "Why do programmers prefer dark mode? Because light attracts bugs!",
    "A SQL query walks into a bar, walks up to two tables and asks: 'Can I join you?'",
    "Programming is 10% writing code and 90% figuring out why it’s not working.",
    "I would love to change the world, but they won’t give me the source code.",
    "Weeks of coding can save you hours of planning.",
    "If at first you don’t succeed, call it version 1.0.",
  ];

  getQuote(): Observable<string> {
    const randomIndex = Math.floor(Math.random() * this.quotes.length);
    return new Observable<string>((observer) => {
      observer.next(this.quotes[randomIndex]);
      observer.complete();
    });
  }
}
