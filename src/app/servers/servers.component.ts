import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = '';
  userName = '';
  allowNewUsername = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
    if (this.userName.length !== 0) {
      this.allowNewUsername = true;
    }
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created!';
  }

  allowUserclick() {
    this.userName = '';
  }
}
