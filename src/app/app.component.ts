import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Teleperformance';
  constructor(public auth: AuthService) {}
  loginWithRedirect(){
    this.auth.loginWithRedirect();
  }
  logout(){
    this.auth.logout();
  }

}
