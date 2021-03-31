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
import { CommentService } from '../comment.service';


@Component({
  selector: 'watchplayer',
  templateUrl: './watchplayer.component.html',
  styleUrls: ['./watchplayer.component.css']
})
export class WatchplayerComponent implements OnInit {

  userType = 'Player'
  data = []

  

  constructor(private route: ActivatedRoute,
    private router: Router,
    private service: WatchplayerService,
    private http:Http,
    private comment:CommentService

    ) {
       http.get('http://localhost:3000/api/users/')
       .subscribe(response=>{
         this.data = response.json();
       } )
       
   }

  ngOnInit(): void {
	 this.service.getAll().subscribe(data=> {
	          this.data = data;
    }, 
    
    )

    this.comment
  }

  viewDetail(user) {
    this.router.navigate(['/showstats', user._id]);
  }
  
  
}
