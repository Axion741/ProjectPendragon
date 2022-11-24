import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from './services/global-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private _globalService: GlobalService, private _router: Router) { 
    console.log("Initializing Heartbeat");
    this.getCurrentYear();   
    var interval = setInterval(() => {this.getCurrentYear()}, 10000);
  }

  title = 'ProjectPendragon';

  getCurrentYear() {
    this._globalService.getCurrentYear()
      .subscribe({
        next: response => {
          this._globalService.currentYear = response;
          this._globalService.isConnectedToServer = true;

          if (this._router.url == "/disconnected")
            this._router.navigate(["/"]);
        },
        error: error => {
          console.log(error);
          this._globalService.isConnectedToServer = false;
          if (this._router.url != "/disconnected") {
            this._router.navigate(["disconnected"]);
          }
        }
      })
  }

  isConnectedToServer(): boolean {
    return this._globalService.isConnectedToServer;
  }
}
