import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private role: 'admin' | 'client' | null = null;

  setRole(role: 'admin' | 'client') {
    this.role = role;
  }

  getRole(): 'admin' | 'client' | null {
    return this.role;
  }
}
