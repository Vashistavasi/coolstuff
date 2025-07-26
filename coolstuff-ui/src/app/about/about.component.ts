import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  about: any = {};

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>("/api/about").subscribe((data) => {
      this.about = data;
    });
  }
}
