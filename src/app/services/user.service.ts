import { Injectable } from '@angular/core';
import { Http } from "@angular/http"
import { map } from 'rxjs/operators';

@Injectable()
export class UserService {

  // userList = [
  //   {
  //     name: 'kong'
  //   },
  //   {
  //     name: 'alex'
  //   },
  //   {
  //     name: 'joseph'
  //   }
  // ]
  constructor(private http:Http) {
  }

  getUsers() {
    return this.http.get('http://localhost:8080/api/users').pipe(
      map(data=> data.json())
    )
  }

  addUsers(user) {
    return this.http.post('http://localhost:8080/api/users', user).pipe(
      map(data=> data.json())
    )
  }

}
