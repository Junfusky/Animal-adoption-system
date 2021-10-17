import { Component } from '@angular/core';
import { faUser} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'adoption-app';
  faUser = faUser;
  userLogin: boolean = false;

  constructor(
  private router: Router,
) {}

  goToLogin() {
    this.router.navigate(['login']);
  }

  logout() {
    localStorage.removeItem('currentUserToken');
    this.router.navigate(['home']);
  }

}
