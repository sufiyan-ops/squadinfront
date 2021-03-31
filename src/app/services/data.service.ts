import { NoAccess } from './../common/noaccess';
import { NotFoundError } from './../common/not-found-error';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import {map, catchError} from "rxjs/operators";
import { throwError } from 'rxjs';
import { BadInput } from '../common/bad-input';
import { AppError } from '../common/app-error';


export class DataService {

  headers: Headers
  token: string
  options: RequestOptions

  constructor(private url:string, private http:Http) { 
  }


  setHeaders() {
    this.headers = new Headers();
    this.token = localStorage.getItem('auth-token');
    this.headers.append('auth-token', this.token);
    this.options = new RequestOptions({headers: this.headers})
    console.log(this.options);
  }

  getAll() {
    //this.setHeaders();
    this.headers = new Headers();
    this.token = localStorage.getItem('auth-token');
    this.headers.append('auth-token', this.token);
    this.options = new RequestOptions({headers: this.headers})
    console.log(this.options);
    return this.http.get(this.url,this.options).pipe(
      map(response=>response.json()),
      catchError(this.handleError)
    );
  }

  getcap(caption) {
    this.setHeaders();
   
   return this.http.get(this.url+'/'+caption,this.options).pipe(
      map(response=>response.json()),
      catchError(this.handleError)
    );
  }
  addwithcap(resource,id,caption) {
    this.setHeaders();
    return this.http.post(this.url+'/'+id+'/'+caption, resource,this.options).pipe(
      map(response=> response.json()),
      
    );
  }
  // You can use pipes to link operators together. 
  // Pipes let you combine multiple functions into a single function.
  getById(id) {
    this.setHeaders();
    return this.http.get(this.url +'/'+id).pipe(
      map(response=> response.json()),
      catchError(this.handleError)
    );
  }

  create(resource) {
    this.setHeaders();
    return this.http.post(this.url, resource,this.options).pipe(
      map(response=> response.json()),
      catchError(this.handleError)
    );
  }

  update(resource, caption, id) {
    this.setHeaders();
    return this.http.put(this.url+'/'+caption+'/'+id, resource,this.options).pipe(
      map(response=> response.json()),
      catchError(this.handleError)
    );
  }


  private handleError (error: Response) {
    if (error.status === 400)
      return throwError(new BadInput())
    if (error.status === 404)
      return throwError(new NotFoundError())
    if (error.status === 401 || error.status === 403)
      return throwError(new NoAccess())
      
    return throwError(new AppError(error));  
  }

}
