import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  notifications: any[];

  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get('https://api.github.com/users/mralexgray/repos')
    .map(response => response.json())
    .subscribe(data => this.notifications=data);
  }

}
