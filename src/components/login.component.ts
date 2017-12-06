import { Component, ViewChild, ElementRef, Input } from '@angular/core';
import { LoginService } from '../services/loginservice.services';
@Component({
    selector: 'login-component',
    templateUrl: "./login.component.html"
})

export class LoginComponent {
    username: string = "";
    password: string = "";
    constructor(public loginService: LoginService) {

    }
    submit() {
        this.loginService.signIn({ user: this.username, pass: this.password })
            .subscribe(data => {
                console.log(data);
            },
            error => {
                console.log(error)
            });
        console.log(this.username, this.password);
    }

    submitWithRef(user, pass) {
        this.loginService.signIn({ user: user, pass: pass })
            .subscribe(data => {
                console.log(data);
            },
            error => {
                console.log(error)
            });
        console.log(user, pass);
    }
}