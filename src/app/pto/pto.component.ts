import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import {PtoService} from '../services/pto.service';
import { ProblemService } from '../services/problem.service';
import "../../assets/js/jsFunc";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import {problemSer} from '../interface/problem.interface';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import {faChevronDown, faChevronUp} from '@fortawesome/free-solid-svg-icons'; 
import Swal from 'sweetalert2';



declare var myFunc: () => void;



@Component({
  selector: 'app-pto',
  templateUrl: './pto.component.html',
  styleUrls: ['./pto.component.scss']
})


export class PtoComponent implements OnInit {

  // FA-Icons
  faChevronDown = faChevronDown;
  faChevronUp = faChevronUp;

  infoGroup = new FormGroup({
    vogn: new FormControl('', Validators.required),
    serie: new FormControl('', Validators.required)
  })

  title = 'BankeWebsite';

  public pto = {
    vognNr: '', 
    serieNr: '',
    fejlName: ''

  };
  

  problems: any = [];
  services: problemSer;

  selectedProblem: any;

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
    this.retrieveProblems();
    this.getSingleProblem("61939fc62de969f56120c4ad");
  
  }

  retrieveProblems() {
    this.problemService.getAll()
      .subscribe( (data) => {this.problems = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  getSingleProblem(id: any){
    this.problemService.get(id)
    .subscribe((data: problemSer) => {this.services = data;
      
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

  openAlert(){
    Swal.fire({
      title: 'Your E-PTO report is about to be saved',
      text: 'Do you want to confirm?',
      icon: 'success',
      showCancelButton: true,
      confirmButtonText: 'Confirm',
      cancelButtonText: 'Cancel',
      allowOutsideClick: false
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Your E-PTO report has been saved!',
          '',
          'success'
          
        ).then((result) =>{ 
          location.reload();
          })
        
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        
        Swal.fire(
          'Cancelled',
          '',
          'error'
        ).then((result) =>{ 
          location.reload();
          })
        
      }
      
    }); 

    
  }

  

  


 

  callMyFunc(){
    myFunc();
  }
}


