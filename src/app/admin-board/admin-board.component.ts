import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { PtoService } from '../services/pto.service';
import { ProblemService } from '../services/problem.service';
import { problemSer } from '../interface/problem.interface';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-board',
  templateUrl: './admin-board.component.html',
  styleUrls: ['./admin-board.component.scss']
})
export class AdminBoardComponent implements OnInit {
  content?: string;
  currentService = null;
  problems: any = [];
  causes: any = [];
  solutions: any = [];
  services: problemSer;

  constructor(
    private userService: UserService,
    private ptoService: PtoService,
    private problemService: ProblemService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.retrieveProblems();
    this.getAllCauses();
 
  }

  retrieveProblems() {
    this.problemService.getAll()
      .subscribe( (data) => {this.problems = data;
          //console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  getAllCauses(){
    this.problemService.getAllCauses()
      .subscribe( (data) => {this.causes = data;
         // console.log("all causes",data);
        },
        error => {
          console.log(error);
        });
  }

  getAllSolutions(){
    this.problemService.getAllSolutions()
    .subscribe( (data) => {this.solutions = data;
       // console.log("all solutions",data);
      },
      error => {
        console.log(error);
      });
  }

  deleteService(id: any){
    
    this.problemService.delete(id).subscribe(() => {


    })
  }

  openAlert(){
    Swal.fire({
      title: 'Du er ved at slette en service',
      text: 'Er du sikker på at slette?',
      icon: 'success',
      showCancelButton: true,
      confirmButtonText: 'Ja',
      cancelButtonText: 'annullere',
      allowOutsideClick: false
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Service er blevet slettet',
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
        ).then(() =>{ 
          location.reload();
          })
        
      }
      
    }); 

    
  }

  
  

}
