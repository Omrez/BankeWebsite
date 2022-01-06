import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProblemService } from '../services/problem.service';
import { problemSer } from '../interface/problem.interface';
import { updateDefaultClause } from 'typescript';

@Component({
  selector: 'app-update-content',
  templateUrl: './update-content.component.html',
  styleUrls: ['./update-content.component.scss']
})
export class UpdateContentComponent implements OnInit {

  // validate sign up
  editFormService = new FormGroup({
    serviceProblem: new FormControl(''),
    name: new FormControl(''),
    løsningName: new FormControl('')

  });

  serviceDetail: any = [];

  constructor(private service: ProblemService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCurrentService(this.router.snapshot.params.id);
    this.getCurrentCause(this.router.snapshot.params.id);
    this.getCurrentSolution(this.router.snapshot.params.id);
    
  }

  getCurrentService(id: any){
    this.service.get(id).subscribe((data: any) => {
      this.serviceDetail = data;
      console.log("data", data);
      this.editFormService = new FormGroup({
        serviceProblem: new FormControl(data['serviceProblem']),
          
      
      });
      //console.log("result",this.editFormService.value)   
    })
  }

  getCurrentCause(id: any){
    this.service.getCause(id).subscribe((data: any) => {
     this.serviceDetail = data;
      console.log("data", data);
      this.editFormService = new FormGroup({
        name: new FormControl(data['name'])
    
      });
      console.log("cause", this.editFormService.value);
    })
  }

  getCurrentSolution(id: any){
    this.service.getSolution(id).subscribe((data: any) => {
     this.serviceDetail = data;
      console.log("data", data);
      this.editFormService = new FormGroup({
        name: new FormControl(data['name'])
    
      });
      console.log("cause", this.editFormService.value);
    })
  }

  updatedService(){
    this.service.update(this.router.snapshot.params.id, this.editFormService.value).subscribe((data: any) => {
      //this.serviceDetail = data;
      console.log("updated", data);
      console.log("test update",this.editFormService.value);
      
    });
  }


  updatedCause(){
      this.service.updateCause(this.router.snapshot.params.id, this.editFormService.value).subscribe((data: any) => {
      //this.serviceDetail = data;
      console.log("updated", data);
      console.log("test update",this.editFormService.value);
      
    });
  }

  updatedSolution(){
    this.service.updateSolution(this.router.snapshot.params.id, this.editFormService.value).subscribe((data: any) => {
    //this.serviceDetail = data;
    console.log("updated", data);
    console.log("test update",this.editFormService.value);
    
  });
}


}
