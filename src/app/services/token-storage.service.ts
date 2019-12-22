import { Injectable } from '@angular/core';

const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUsername';
const USERCODE_KEY = 'AuthUserCode';
const ROLE_KEY = 'AuthRole';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  signOut() {
    window.sessionStorage.clear();
  }

  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUsername(username: string) {
    window.sessionStorage.removeItem(USERNAME_KEY);
    window.sessionStorage.setItem(USERNAME_KEY, username);
  }

  public getUsername(): string {
    return window.sessionStorage.getItem(USERNAME_KEY);
  }

  public saveUsercode(usercode: string) {
    window.sessionStorage.removeItem(USERCODE_KEY);
    window.sessionStorage.setItem(USERCODE_KEY, usercode);
  }

  public getUsercode(): string {
    return window.sessionStorage.getItem(USERCODE_KEY);
  }

  public saveRole(role: any) {
    window.sessionStorage.removeItem(ROLE_KEY);
    window.sessionStorage.setItem(ROLE_KEY, role);
  }

  public getRole(): any {
    if (sessionStorage.getItem(TOKEN_KEY)) {
      return window.sessionStorage.getItem(ROLE_KEY);
    }
  }

}
