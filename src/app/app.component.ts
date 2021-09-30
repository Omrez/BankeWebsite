import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import {PtoService} from './services/pto.service';
import { ProblemService } from './services/problem.service';
import "../assets/js/jsFunc";
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';
import { jsDocComment } from '@angular/compiler';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {problemSer} from './interface/problem.interface'
import { Observable } from 'rxjs';



declare var myFunc: () => void;



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {

  title = 'BankeWebsite';
  Object = Object;
  public pto = {
    vognNr: '', 
    serieNr: '',
    fejlName: ''

  };
  

  problems: any = [];
  public services: problemSer[]=[];
  constructor(
     private ptoService: PtoService,
     private problemService: ProblemService,
     private route: ActivatedRoute,
     private router: Router
     ) {}
  ngOnInit(){ 
    //this.retrieveTutorials();
    this.getProblem("6154517d04dc7ac70253e2a8");
  }
  getProblem(id: any){
    this.problemService.get(id)
    .subscribe(data => {this.services = data
      
      console.log(data);
      
    });
    
    
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
          this.problems = data;
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
