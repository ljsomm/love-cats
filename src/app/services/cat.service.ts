import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Cat from '../interfaces/cat';


@Injectable({
  providedIn: 'root'
})
export class CatService {


  constructor(private http: HttpClient) { }

  getCat(){
    return this.http.get<Cat[]>("https://api.thecatapi.com/v1/images/search");
  }
}
