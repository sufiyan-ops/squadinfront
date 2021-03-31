import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class WatchplayerService extends DataService {

  constructor(http:Http) { 
    super("http://localhost:3000/api/watchplayer",http)

}
}