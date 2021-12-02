import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import {PtoService} from './services/pto.service';
import { ProblemService } from './services/problem.service';
import "../assets/js/jsFunc";
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { HomeComponent } from './home/home.component';
import { AuthService } from './services/auth.service';
import { TokenStorageService } from './services/token-storage.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';






@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  title = 'BankeWebsite';

  // validate sign up
  registerGroup = new FormGroup({
    userName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    conpass: new FormControl('', Validators.required)

  });

  // Validate sign In
  loginGroup = new FormGroup({
    signUser: new FormControl('', Validators.required),
    signPass: new FormControl('', Validators.required)
  });

  // register
  registerForm: any = {
    username: null,
    mail: null,
    pass: null,
    conPass: null
  };

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  // Login
  loginForm: any = {
    lusername: null,
    lpassword: null
  };

  isLoggedIn = false;
  isLoginFailed = false;
  errMessage = '';
  roles: string[] = [];

  private roles1: string [] = [];
  showAdminBoard = false;
  showUserBoard = false;

  username?: string;

  constructor(
     public _router: Router,
     public _location: Location,
     public translate: TranslateService,
     private authService: AuthService,
     private tokenStorage: TokenStorageService
     ) {
       translate.addLangs(['EN','DK']);
       translate.setDefaultLang('EN');
       localStorage.setItem('language', 'DK');
      
       }

  switchLang(lang: string) {
    this.translate.use(lang);
    
  }
     
  ngOnInit(): void{ 
    this.isLoggedIn = !!this.tokenStorage.getToken();

    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }

    if (this.isLoggedIn) {
      const user = this.tokenStorage.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showUserBoard = this.roles.includes('ROLE_USER');

      this.username = user.username;
    }
  }

  submitRegister(): void{
    const {username, mail, pass} = this.registerForm;

    this.authService.register(username, mail, pass).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
        
      }
    );
  } //submit Register end

  submitLogin(): void{
    const {lusername, lpassword} = this.loginForm;

    this.authService.login(lusername, lpassword).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.reloadPage();
        
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  } //submit Login end
  
  reloadPage(): void {
    window.location.reload();
  }

  logout(): void {
    this.tokenStorage.signOut();
    this._router.navigateByUrl('/home').then(() => {
      window.location.reload();
    });
    
  }

  
} //class appcomponent end


