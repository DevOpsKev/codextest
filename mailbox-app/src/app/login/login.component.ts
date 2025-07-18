import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';
  error = '';

  constructor(private router: Router, private auth: AuthService) {}

  login() {
    if (this.email === 'admin@example.com' && this.password === 'Admin123!') {
      this.auth.setRole('admin');
      this.error = '';
      this.router.navigate(['/dashboard']);
    } else if (this.email === 'client@example.com' && this.password === 'Client123!') {
      this.auth.setRole('client');
      this.error = '';
      this.router.navigate(['/dashboard']);
    } else {
      this.error = 'Invalid credentials';
    }
  username = '';
  password = '';

  login() {
  }
}
