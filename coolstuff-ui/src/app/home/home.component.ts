import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Article {
  id: number;
  title: string;
  link: string;
  content: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  articles: Article[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Article[]>("/api/articles").subscribe((data) => {
      this.articles = data;
    });
  }
}
