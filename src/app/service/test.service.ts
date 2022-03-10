import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }

  retrieveText(){
    return this.http.get(`https://duartesomsen-backend.com/hello`,{responseType: 'text'});
  }
}
