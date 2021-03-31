import { Component, OnInit } from '@angular/core';

import { Http } from '@angular/http';
import { NotFoundError } from './../common/not-found-error';
import { BadInput } from './../common/bad-input';
import { AppError } from './../common/app-error';
import { WatchplayerService } from './../services/watchplayer.service';



import { ActivatedRoute, Router } from '@angular/router';
//import { Router, ActivatedRoute } from '@angular/router';
//import { Http } from '@angular/http';
//import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { staticNever } from 'rxjs-compat/add/observable/never';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  userType = 'Player'
  data = []
  user

  

  constructor(private route: ActivatedRoute,
    private router: Router,
    private auth: AuthService,
    private service:UserService,
    private http:Http
    )

    
     {
       http.get('http://localhost:3000/api/users/'+ auth.getCurrentUser()._id).subscribe(response =>{
         this.user=response.json();
         console.log(this.user);
        this.data =response.json();
       
        
       } )
       
   }

  ngOnInit(): void {
	 this.service.getAll().subscribe(data=> {
	          this.data = data;
    }, 
    
    )
  }
  url="./assets/event.jpg";
  onselectFile(e){
if(e.target.files){
  var reader = new FileReader();
  reader.readAsDataURL(e.target.files[0]);
  reader.onload=(event:any)=>{
    this.url=event.target.result;
    
  }
}
  }

  viewDetail(user) {
    this.router.navigate(['/showstats', user._id]);
  }
  editUser(user) {
      this.router.navigate(['/signup', user._id]);
  }
  
}