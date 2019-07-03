import { Component, OnInit } from "@angular/core";
import { Schedules } from "../schedules";
@Component({
  selector: "app-schedules",
  templateUrl: "./schedules.component.html",
  styleUrls: ["./schedules.component.scss"]
})
export class SchedulesComponent implements OnInit {
  containerType = ["20'", "20 ' OT", "40 DV", "40 HC", "40' OT", "45'"];
  model = new Schedules("", "", "'");
  submitted = false;

  newSchedules() {
    this.model = new Schedules("", "", "");
  }

  onSubmit() {
    this.submitted = true;
  }
  // TODO: Remove this when we're done
  get diagnostic() {
    return JSON.stringify(this.model);
  }
  constructor() {}

  ngOnInit() {}
}
