import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import {PtoService} from './services/pto.service';
import { ProblemService } from './services/problem.service';
import "../assets/js/jsFunc";
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { HomeComponent } from './home/home.component';






@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {


  title = 'BankeWebsite';

  
  constructor(
     private ptoService: PtoService,
     private problemService: ProblemService,
     public _router: Router,
     public _location: Location,
     public translate: TranslateService
     ) {
       translate.addLangs(['EN','DK']);
       translate.setDefaultLang('EN');
       localStorage.setItem('language', 'DK');
      
       }

  switchLang(lang: string) {
    this.translate.use(lang);
    
  }
     
  ngOnInit(){ 
   
        
  
  }

  
}


