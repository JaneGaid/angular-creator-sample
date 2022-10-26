import { Component, OnInit } from "@angular/core";
import { CreatorBase } from "survey-creator-core";
import { json } from "./json";
@Component({
   selector: "app-root",
   templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {
  title = "Survey Creator for Angular";
  creator = new CreatorBase({});
  ngOnInit() {
    this.creator.JSON = json;
  }
}