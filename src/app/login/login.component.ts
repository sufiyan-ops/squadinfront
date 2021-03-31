import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidLogin: boolean;
  constructor(private authService:AuthService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }

  signIn(credentials) {
      this.authService.login(credentials).subscribe(result=>
       {
         if(result) {
           let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
           this.router.navigate([returnUrl || '/navbar'])
           
          
         }
         else {
          this.invalidLogin = true;
          alert("Incorrect username or password");
         }
       }
      )
     
  }
}

