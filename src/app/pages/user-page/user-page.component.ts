import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service'
import * as _ from 'lodash'

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  newName;
  userList;

  onNewUser = (name)=> {
    if (!_.isEmpty(name)) {
      this.userList.push({name})
    }
    this.newName = ""
  }

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.userList = this.userService.getUsers()
  }

}
