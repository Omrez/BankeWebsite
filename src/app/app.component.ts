import { Component, OnInit } from '@angular/core';
import {PtoService} from './services/pto.service';
import { ProblemService } from './services/problem.service';
import "../assets/js/jsFunc";
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';
import { jsDocComment } from '@angular/compiler';
import { FormControl, FormGroup } from '@angular/forms';



declare var myFunc: () => void;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'BankeWebsite';

  public pto = {
    vognNr: '', 
    serieNr: '',
    fejlName: ''

  };

  services: any;
  currentService = null;
  

  
  constructor(private ptoService: PtoService, private problemService: ProblemService) {}

  ngOnInit(){ 
    this.retrieveTutorials();
  }

  savePto(){
    const data = {
      vognNr: this.pto.vognNr,
      serieNr: this.pto.serieNr,
      fejlName: document.getElementById('fejlName')?.innerHTML

    };

    this.ptoService.create(data)
      .subscribe(
        (        response: any) => {
          console.log(response);
          
        },
        (        error: any) => {
          console.log(error);
        });  
  }

  retrieveTutorials() {
    this.problemService.getAll()
      .subscribe(
        data => {
          this.services = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }


 

  callMyFunc(){
    myFunc();
  }
}
