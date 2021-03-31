import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userName
  type;
  
 
  constructor(
    
    private router : Router,
    private authService: AuthService
  ) { 
    this.userName = authService.getCurrentUser().name;
    this.type = authService.getCurrentUser().userType;
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
