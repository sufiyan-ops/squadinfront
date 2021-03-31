import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CreatefeedService } from '../createfeed.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-createactivity',
  templateUrl: './createactivity.component.html',
  styleUrls: ['./createactivity.component.css']
})
export class CreateactivityComponent implements OnInit {
  description:any
  activityname:any
  constructor(private feed:CreatefeedService,private auth:AuthService) { }

  ngOnInit(): void {
  }

  submit(){
    this.feed.create({
      userid:this.auth.getCurrentUser()._id,
      Activityname:this.activityname,
      ActivityDescription:this.description,
      TimeStamp:new Date()
    }).subscribe(response=>{
      console.log(response);
    })
  }

}
