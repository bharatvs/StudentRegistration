import { Component, OnInit, ViewChild } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap/tabs'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  constructor() {}
  @ViewChild('staticTabs') staticTabs: TabsetComponent;

  ngOnInit(): void {}

  selectTab(tabId: number) {
    this.staticTabs.tabs[tabId].active = true;
  }

}
