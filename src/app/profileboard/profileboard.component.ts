import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-profileboard',
  templateUrl: './profileboard.component.html',
  styleUrls: ['./profileboard.component.scss']
})
export class ProfileboardComponent implements OnInit {
  currentUser: any;

  constructor(private token: TokenStorageService) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
  }

}
