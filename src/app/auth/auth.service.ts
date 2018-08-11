import {User} from './user.model';
import {AuthData} from './auth-data.model';
import {Guid} from './guid';
import {Subject} from 'rxjs';

export class AuthService {
  authChange = new Subject<boolean>();
  private user: User;

  registerUser(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Guid.newGuid()
    };
    this.authChange.next(true);
  }

  login(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Guid.newGuid()
    };
    this.authChange.next(true);
  }

  logout() {
    this.user = null;
    this.authChange.next(false);
  }

  getUser() {
    return {...this.user};
  }

  isAuth() {
    return this.user != null;
  }
}
