import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/item';
import { ChatService } from '../chat.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  type;
  usertype;
  AllUsersOnline = [];
  historyMessages:any;
  chatHistory = [];
  showHistory = false;
  user = '';
  room: string;
  messageText: string;
  messageArray: Array<{user: string, message: string, time: string}> = [];
  historyArray: Item[] = [];
  typingShow = {user:'',message:''};
  Name = '';
  Email = '';
  showJoin = false;
  showType = false;
  constructor(private chatservice:ChatService,private auth:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.Name = this.auth.getCurrentUser().name;
    this.Email = this.auth.getCurrentUser().email;
    this.usertype = this.auth.getCurrentUser().userType;
    console.log(this.auth.getCurrentUser());

    this.chatservice.newUserJoined()
  .subscribe( data => this.messageArray.push(data));

  this.chatservice.userLeftRoom()
  .subscribe(data => this.messageArray.push(data));

  this.chatservice.newMessageReceived()
  .subscribe(data => {
    this.messageArray.push(data);
    // this.playAudio();
    this.typingShow = {user:'',message:''};
    this.messageText = '';
  });

  this.chatservice.userTyping()
  .subscribe(data => this.typingShow = data);

  this.chatservice.allChat()
  .subscribe( data => this.chatHistory = data);

  this.chatservice.allOnlineUsers()
  .subscribe( data => this.AllUsersOnline = data);
  }

  join() {
    this.chatservice.joinRoom({user: this.Name, room: this.room});
    this.chatservice.newUser({email: this.Email, room: this.room});
    this.getMessages();

    this.showJoin = true;
    // console.log(this.chatHistory);
    // console.log(this.AllUsersOnline);
    this.showHistory = true;
  }
  leave() {
    this.chatservice.leaveRoom({user: this.Name, room: this.room});
    this.historyMessages = [];
    this.messageArray = [];
    this.AllUsersOnline = [];
    this.showJoin = false;
  }
  sendMessage(event) {
    console.log(event)
    const date = new Date().toDateString();
    const time = new Date().toTimeString().split(' ')[0];
    this.chatservice.sendMessage({user: this.Name, room: this.room, message: this.messageText, Date: date, Time: time});
    this.addMessage();
  }
  showTyping(event) { 
    this.showType = true;
    if(event.code === "Enter"){
    const date = new Date().toDateString();
    const time = new Date().toTimeString().split(' ')[0];
    this.chatservice.sendMessage({user: this.Name, room: this.room, message: this.messageText, Date: date, Time: time});
    this.addMessage();
    this.showType = false;
    }
    this.chatservice.typing({user: this.Name, room: this.room});
    
  }

  addMessage() {
    const date1 = new Date().toDateString();
    const time1 = new Date().toTimeString().split(' ')[0];
    const newUser = {
      Name: localStorage.getItem('name'),
      userName: localStorage.getItem('username'),
      email: localStorage.getItem('email'),
      message: this.messageText,
      room: this.room,
      date: date1,
      time: time1
    };
    this.chatservice.saveMessage(newUser)
    .subscribe(
      res => {
        console.log('Message saved!!');
            },
      err => {
        console.log('this is error', err);
       }
    );
  }
  getMessages() {
    const details = {
      room: this.room
    };
    this.chatservice.allMessages(details)
    .subscribe(
      res => { this.historyMessages = res.json();
             },
      err => { console.log(err); }
    );
  }
  logoutUser() {
    localStorage.clear();
    this.router.navigate(['/ChatLogin']);
   // localStorage.removeItem('email');
  }
  isPlayer(){
    if(this.usertype == "Player"){
      return true;
    }
    else{
      return false;
    }

    
  }
  isOrganizer(){
    if(this.usertype == "Organizer"){
      return true;
    }
    else{
      return false;
    }

    
  }

  isDepartment(){
    if(this.usertype == "Department"){
      return true;
    }
    else{
      return false;
    }


  }}

  