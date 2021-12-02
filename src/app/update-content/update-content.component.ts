import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProblemService } from '../services/problem.service';
import { problemSer } from '../interface/problem.interface';

@Component({
  selector: 'app-update-content',
  templateUrl: './update-content.component.html',
  styleUrls: ['./update-content.component.scss']
})
export class UpdateContentComponent implements OnInit {

  // validate sign up
  editFormService = new FormGroup({
    serviceProblem: new FormControl(''),
    årsagName: new FormControl(''),
    løsningName: new FormControl('')

  });

  serviceDetail: problemSer;

  constructor(private service: ProblemService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCurrentService(this.router.snapshot.params.id);
    
  }

  getCurrentService(id: any){
    this.service.get(id).subscribe((data: any) => {
      this.serviceDetail = data;
      console.log("data", data);
      this.editFormService = new FormGroup({
        serviceProblem: new FormControl(data['serviceProblem'])
    
      });
    })
  }

  updatedService(){
    this.service.update(this.router.snapshot.params.id, this.editFormService.value).subscribe((data: any) => {
      //this.serviceDetail = data;
      console.log("updated", data);
      console.log("test update",this.editFormService.value);
      
    });


  }


}
