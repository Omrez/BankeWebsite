import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { ProblemService } from '../services/problem.service';
import { problemSer } from '../interface/problem.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addcontent',
  templateUrl: './addcontent.component.html',
  styleUrls: ['./addcontent.component.scss']
})
export class AddcontentComponent implements OnInit {

  createForm = new FormGroup({
    serviceProblem: new FormControl('')
  });

  createCause = new FormGroup({
    selectCause: new FormControl(''),
    name: new FormArray([]),
  })

  createSolution = new FormGroup({
    selectSolution: new FormControl(''),
    name: new FormArray([]),
  })

  alert: boolean = false;
  problems: any = [];

  constructor(private service: ProblemService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.getProblem();
  }

  get causeControls(){
      return (<FormArray>this.createCause.get('name')).controls;
  }

  addCauseArray(){
    const control = new FormControl(null, [Validators.required]);
    (<FormArray>this.createCause.get('name')).push(control);
  }

  get solutionControls(){
    return (<FormArray>this.createSolution.get('name')).controls;
  }

  addSolutionArray(){
    const control = new FormControl(null, [Validators.required]);
    (<FormArray>this.createSolution.get('name')).push(control);
  }

  createService(){
      this.service.create(this.createForm.value).subscribe((data: any) => {
          console.log("resulst", data);
      })

      
      this.alert = true;
  }

  createCauses(){
    this.service.createCause(this.createCause.get('selectCause')?.value,this.createCause.value).subscribe((data: any) =>{
      console.log("dataRes",data)
    })

    this.alert = true;
  }

  createSolutions(){
    this.service.createSolution(this.createSolution.get('selectSolution')?.value,this.createSolution.value).subscribe((data: any) =>{
      console.log("dataRes",data)
    })
    
  }

  getProblem(){
    this.service.getAll()
    .subscribe( (data) => {this.problems = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }

  closeAlert(){
    this.alert = false;
    this.createForm.reset();
  }

}
