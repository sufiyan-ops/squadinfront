import { Injectable } from '@angular/core';
import { DataService } from './services/data.service';
import { Http } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class CommentService extends DataService {

  constructor(private Http:Http) {
    super('http://localhost:3000/api/comments/',Http);
  }
}
