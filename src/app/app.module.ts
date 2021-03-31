import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthGuard } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { DataService } from './services/data.service';
import {StatsService} from './services/stats.service';
import {StatService} from './services/stat.service';
import {WatchplayerService} from './services/watchplayer.service';
import {EquipService} from './equip.service';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule } from '@angular/router';

//import { NgModule } from '@angular/core';
import {  NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap'; 
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { UserdataComponent } from './userdata/userdata.component';
import { NavComponent } from './nav/nav.component';
import { StatsComponent } from './stats/stats.component';
import { ShowstatsComponent } from './showstats/showstats.component';
import { CommonModule } from '@angular/common';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { ChatComponent } from './chat/chat.component';
import { WatchplayerComponent } from './watchplayer/watchplayer.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { FeedComponent } from './feed/feed.component';
import { EquipmentComponent } from './equipment/equipment.component';
import {MatFormFieldModule, MatHint, MatLabel} from '@angular/material/form-field';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { ActivityComponent } from './activity/activity.component';
import { CreateactivityComponent } from './createactivity/createactivity.component';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    NavbarComponent,
    ProfileComponent,
    HomeComponent,
    MainComponent,
    UserdataComponent,
    NavComponent,
    StatsComponent,
    ShowstatsComponent,
    ChatComponent,
    WatchplayerComponent,
    UserprofileComponent,
    FeedComponent,
    EquipmentComponent,
    ActivityComponent,
    CreateactivityComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CommonModule,
    NgbModalModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatFormFieldModule,MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatProgressBarModule,
    MatToolbarModule,

    
    
    
    ToastrModule.forRoot(),
    RouterModule.forRoot([
      
      { path: 'signup', component: SignupComponent },
      {path:'signup/:id',component:SignupComponent},
      { path: 'login', component:LoginComponent},
      { path: 'navbar', component:NavbarComponent},
      { path: 'profile', component:ProfileComponent},
      { path: 'home', component:HomeComponent},
      { path: 'main', component:MainComponent},
      {path: 'userdata', component:UserdataComponent},
      {path: 'nav', component:NavComponent},
      {path: 'stats', component:StatsComponent},
      {path: 'showstats/:id', component:ShowstatsComponent},
      {path:'chat',component:ChatComponent},
      {path:'watchplayer',component:WatchplayerComponent},
      {path:'userprofile',component:UserprofileComponent},
      {path: 'feed',component:FeedComponent},
      {path: 'equipments', component: EquipmentComponent},
      {path:'activity', component: ActivityComponent},
      {path: 'createactivity', component: CreateactivityComponent},
     
 
  ]),
],
  providers: [
    AuthService,
    AuthGuard,
    StatsService,
    StatService,
    WatchplayerService,
    EquipService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
