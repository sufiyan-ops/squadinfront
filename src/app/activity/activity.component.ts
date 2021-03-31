import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ChatComponent } from '../chat/chat.component';
import { CreateactivityComponent } from '../createactivity/createactivity.component';
import { CreatefeedService } from '../createfeed.service';

import { Equipment } from '../equipment/equipment.model';
import { SignupComponent } from '../signup/signup.component';



@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent {
  activities:any;
  
  constructor(public dialog: MatDialog,private feed:CreatefeedService) { }

  ngOnInit(): void {
    this.getFeed();
  }

  
  openDialog() {
    const dialogRef = this.dialog.open(CreateactivityComponent,{
      width: '600px',
      
    })

    dialogRef.afterClosed().subscribe(result=>{
      this.getFeed();
    })
    
    
  }

  getFeed(){
    this.feed.getAll().subscribe(response=>{
      this.activities=response;
    });
  }


}


