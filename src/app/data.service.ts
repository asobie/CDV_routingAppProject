import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "./about/user.model";

@Injectable({
  providedIn: "root"
})
export class DataService {
  apiUrl = "https://jsonplaceholder.typicode.com/users";

  constructor(private _http: HttpClient) {}

  getUsers() {
    return this._http.get<User[]>(this.apiUrl);
  }
}
