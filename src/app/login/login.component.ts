import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  myForm: FormGroup;
  post: any;

  constructor(private fb: FormBuilder) {
    this.myForm = fb.group({
      username: [null, Validators.required],
      password: [
        null,
        Validators.compose([Validators.required, Validators.minLength(5)])
      ]
    });
  }
  addPost(post) {
    alert("Post: " + post.username + " " + post.password);
  }
  ngOnInit() {}
}
