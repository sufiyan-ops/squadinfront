
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  userName
  type;
  userid;
  
 
  constructor(
    
    private router : Router,
    private authService: AuthService
  ) { 
    this.userName = authService.getCurrentUser().name;
    this.type = authService.getCurrentUser().userType;
    this.userid = authService.getCurrentUser()._id;
  }

  ngOnInit(): void {
  }
  login(){
    this.router.navigate(['/login']);
  }

  isLoggedIn() {
    // this.userName = this.authService.userName();
    return this.authService.isLoggedIn();
  }

  isPlayer(){
    if(this.type == "Player"){
      return true;
    }
    else{
      return false;
    }

    
  }
  isOrganizer(){
    if(this.type == "Organizer"){
      return true;
    }
    else{
      return false;
    }

    
  }

  isDepartment(){
    if(this.type == "Department"){
      return true;
    }
    else{
      return false;
    }

    
  }
  

}

