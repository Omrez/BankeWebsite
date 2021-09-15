import { Component, OnInit } from '@angular/core';
import {PtoService} from './services/pto.service';


declare var myFunc: () => void;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  pto = {
    vognNr: '',
    fejlName: ''
  };
  


  constructor(private ptoService: PtoService) {}


  ngOnInit(){ 
  }


  savePto(){
    const data = {
      vognNr: this.pto.vognNr,
      fejlName: this.pto.fejlName
    };

    this.ptoService.create(data)
      .subscribe(
        response => {
          console.log(response);
          
        },
        error => {
          console.log(error);
        });
  }

  title = 'BankeWebsite';

  callMyFunc(){
    myFunc();
  }
}
