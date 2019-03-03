import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { State } from 'src/app/app.enums';
import { Router } from '@angular/router';

function hasANumberDigit({ value }: AbstractControl) {
    console.log('hasANumberDigit >', value);
    
    const regexp = /(.*?[0-9])/;

    if (regexp.test(value)) {
        return null;
    } else {
        return { hasNoNumber: true };
    }
}


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    formLogin;
    constructor(private router: Router) {}

    ngOnInit() {
        this.formLogin = new FormGroup({
            email: new FormControl(State.empty, [
                Validators.required,
                Validators.email
            ]),
            password: new FormControl(State.empty, [
                Validators.required,
                Validators.minLength(8),
                hasANumberDigit
            ]),
            
        },
        [hasANumberDigit]);

        console.log(this.formLogin);
    }

    onClick() {
        const {
            email,
            password
        } = this.formLogin.value;

        console.log(email, password);
        this.router.navigate(['productos']);
    }
}