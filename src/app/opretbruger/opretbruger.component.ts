import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-opretbruger',
  templateUrl: './opretbruger.component.html',
  styleUrls: ['./opretbruger.component.scss']
})
export class OpretbrugerComponent implements OnInit {

  // validate sign up
  registerGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    roles: new FormControl('', Validators.required)

  });

  // register
  registerForm: any = {
    username: null,
    mail: null,
    pass: null
  };

  alert:boolean = false;
  errorMessage = '';
  isSuccessful = false;
  isSignUpFailed = false;

  constructor(private authService: AuthService,) { }

  ngOnInit(): void {
    
  }

  submitRegister(): void{
    const {username, mail, pass} = this.registerForm;
    console.log(this.registerGroup.value);
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
    this.alert = true;
  } //submit Register end

  onChange(res: any){
    console.log(res.value)
  }

  reloadPage(): void {

    
    window.location.reload()
    
  }

  closeAlert(){
    this.alert = false;
  }

}
