import { Component, OnInit } from "@angular/core";
import { Container } from "../container";

@Component({
  selector: "app-track",
  templateUrl: "./track.component.html",
  styleUrls: ["./track.component.scss"]
})
export class TrackComponent {
  sizes = ["20'", "20 ' OT", "40 DV", "40 HC", "40' OT", "45'"];
  condition = ["sound", "damaged", "undefined"];
  model = new Container(18, "", "", "");

  submitted = false;
  onSubmit() {
    this.submitted = true;
  }
  // TODO: Remove this when we're done
  get diagnostic() {
    return JSON.stringify(this.model);
  }

  newSearch() {
    this.model = new Container(42, "", "");
  }
  constructor() {}

  ngOnInit() {}
}
