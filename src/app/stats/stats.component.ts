import { Component, OnInit } from '@angular/core';

import { Http } from '@angular/http';
import { NotFoundError } from './../common/not-found-error';
import { BadInput } from './../common/bad-input';
import { AppError } from './../common/app-error';
import { StatsService } from './../services/stats.service';



import { ActivatedRoute, Router } from '@angular/router';
//import { Router, ActivatedRoute } from '@angular/router';
//import { Http } from '@angular/http';
//import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { staticNever } from 'rxjs-compat/add/observable/never';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  isEditMode:boolean
  stat:any = []
  id
  SportsCategory = [
    {id:1, type:"Cricket"},
    {id:2, type:"Football"},
    {id:3, type:"Table Tenis"},
    {id:4, type:"Volley ball"}
   
    
    
  ]

  constructor (
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private service: StatsService,
    private auth:AuthService,
    
    private router: Router) { }
    

  ngOnInit(): void {
    
      this.route.paramMap.subscribe(params => {
        if(params.has("id")) {
            this.isEditMode = true
            this.id = params.get('id');    
            this.service.getById(this.id).subscribe(
              data=> {
                this.stat = data
              },
              (error: AppError) => {
                if (error instanceof NotFoundError)
                  this.toastr.error('Not Found');
                else
                  throw error 
              }
            )  
        }
      })
     
      
  }

  signupUser(sf) {
    
    alert("Stats Updated Successfully");
    let user = {
      id: this.auth.getCurrentUser()._id,
      name: sf.value.registration.fName,
      SportsCategory: sf.value.registration.SportsCategory,
      matches: sf.value.registration.matches,
      Performance: sf.value.registration.Performance,
      Summary: sf.value.registration.Summary,
      
     
     
     
    }
    
    this.service.create(user).subscribe(data=> {
          this.toastr.success(`Stats For ${data.name} successfully updated!`);
      },
       (error: AppError) => {
          if (error instanceof BadInput)
            this.toastr.error('Incorrect Inputs');
          else
            throw error
       }
    )
    
    sf.reset();

  }
 

}
