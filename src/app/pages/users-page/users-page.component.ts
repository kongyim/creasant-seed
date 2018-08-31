import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service'
import * as _ from 'lodash'

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit {

  newName;
  userList;

  onNewUser(){
    if (!_.isEmpty(this.newName)) {
      this.userService.addUsers({name:this.newName}).subscribe(()=>{
        this.newName = ""
        this.updateUserList()
      })
    }

  }

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.updateUserList()
  }

  updateUserList() {
    this.userList = this.userService.getUsers()
  }

}
