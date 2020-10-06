import { Injectable } from '@angular/core';
import {Http, Response } from '@angular/http';
import {  map } from 'rxjs/operators';

@Injectable()
export class ProductService {

  constructor(private_http: Http) { 
    
  }

 

  getAlbum(id:number){
    this._http.get(albumUrl).map((res:Response) => res.json());
    )
  }

}
