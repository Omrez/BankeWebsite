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






@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  title = 'BankeWebsite';


  // register
  registerForm: any = {
    fName: null,
    lName: null,
    mail: null,
    pass: null
  };

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  // Login
  loginForm: any = {
    lMail: null,
    lPass: null
  };

  isLoggedIn = false;
  isLoginFailed = false;
  errMessage = '';
  roles: string[] = [];

  name?: string;

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
    const user = this.tokenStorage.getUser();
    this.isLoggedIn = !!this.tokenStorage.getToken();

    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }


    this.name = user.name;
  }

  submitRegister(): void{
    const {fName, lName, mail, pass} = this.registerForm;

    this.authService.register(fName, lName, mail, pass).subscribe(
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
    const {lMail, lPass} = this.loginForm;

    this.authService.login(lMail, lPass).subscribe(
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
    window.location.reload();
  }

  
} //class appcomponent end


