import { Component, OnInit } from "@angular/core";
import { AboutService } from "./about.service";
import { MarkdownModule } from "ngx-markdown";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"],
  standalone: true,
  imports: [CommonModule, MarkdownModule],
})
export class AboutComponent implements OnInit {
  aboutContent: string | undefined;

  constructor(private aboutService: AboutService) {}

  ngOnInit(): void {
    this.aboutService.getAbout().subscribe((data) => {
      this.aboutContent = data.description;
    });
  }
}
