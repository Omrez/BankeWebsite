import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { PtoService } from '../services/pto.service';
import { ProblemService } from '../services/problem.service';
import { problemSer } from '../interface/problem.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-board',
  templateUrl: './admin-board.component.html',
  styleUrls: ['./admin-board.component.scss']
})
export class AdminBoardComponent implements OnInit {
  content?: string;
  currentService = null;
  problems: any = [];
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

  
  

}
