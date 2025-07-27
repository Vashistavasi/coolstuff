import { Component, OnInit } from "@angular/core";
import { ThemeService } from "../theme.service";

@Component({
  selector: "app-dark-mode-toggle",
  templateUrl: "./dark-mode-toggle.component.html",
  styleUrls: ["./dark-mode-toggle.component.css"],
})
export class DarkModeToggleComponent implements OnInit {
  isDarkMode: boolean;

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.isDarkMode = this.themeService.isDarkMode();
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    this.themeService.update(this.isDarkMode ? "dark-mode" : "light-mode");
  }
}
