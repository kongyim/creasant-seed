import { Component } from '@angular/core';

import * as _ from 'lodash'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  newName;

  userList = [
    {
      name: 'kong'
    },
    {
      name: 'alex'
    },
    {
      name: 'joseph'
    }
  ]

  onNewUser = (name)=> {
    if (!_.isEmpty(name)) {
      this.userList.push({name})
    }
    this.newName = ""
  }
}
