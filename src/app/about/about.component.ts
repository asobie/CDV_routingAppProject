import { Component, OnInit } from "@angular/core";
import { User } from "./user.model";
import { DataService } from "../data.service";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"]
})
export class AboutComponent implements OnInit {
  users$: User[];
  constructor(private dataService: DataService) {}

  ngOnInit() {
    return this.dataService.getUsers().subscribe(data => (this.users$ = data));
  }
}
