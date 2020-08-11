import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Injectable()
export class Auth2Guard{
    constructor(
        private authService: AuthService,
        private router: Router
    ){}

    canActivate(){
        if(!this.authService.loggedIn()){
            return true;
        } else {
            this.router.navigate(['/dashboard']);
            return false;
        }
    }
}