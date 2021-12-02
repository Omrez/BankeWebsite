import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
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
    name: new FormControl('')
  })

  createSolution = new FormGroup({
    name: new FormControl('')
  })

  selectedId: any;

  problems: any = [];

  constructor(private service: ProblemService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.getProblem();
  }

  createService(){
      this.service.create(this.createForm.value).subscribe((data: any) => {
          console.log("resulst", data);
      })
  }

  createCauses(){
    
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

  onChange(res: any){
    console.log(res.value);
    this.service.createCause(res.value, this.createCause.value).subscribe((data: any) =>{
      console.log("dataRes",data)
    })
    
  }

}
