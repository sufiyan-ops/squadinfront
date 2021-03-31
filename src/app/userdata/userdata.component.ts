import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css']
})
export class UserdataComponent implements OnInit {
profile
  data = []
user;
 
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

  editUser(user) {
    this.router.navigate(['/signup', user._id]);
}
}

  


