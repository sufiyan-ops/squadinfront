import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Http } from '@angular/http';

import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
profile

data = []
user;
userType
 
  constructor(private http: Http,
    private service :UserService,
    private router: Router,
    private auth: AuthService){

      console.log(auth.getCurrentUser()._id);
      http.get('http://localhost:3000/api/users/'+auth.getCurrentUser()._id).subscribe(response => {
        this.profile=response.json();
        console.log(this.profile);
        this.data =response.json();
       
      })
    }

  ngOnInit(): void {
    this.service.getAll().subscribe(data=> {
      this.data = data;
})} 
viewDetail(user) {
  this.router.navigate(['/userprofile', user._id]);
}
  editUser(user) {
    this.router.navigate(['/signup', user._id]);
}


}
