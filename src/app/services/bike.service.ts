import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class BikeService {

  constructor(private http: HttpClient) { }
  /***
   * Securing the admin portion.  Passing the headers that are passed in the tokens
   * using common header http authorizaton scheme for use in apis tokens to access the backend 
   * apis
   */
  getBikes(){
    // let token = localStorage.getItem('access_token');
    // return this.http.get('/forward/api/v1/bikes', 
    // {headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)}
    // );
    return this.http.get('/forward/api/v1/bikes', this.setAuthHeaders());
  }

  getBike(id: number){
    // let token = localStorage.getItem('access_token');
    // return this.http.get('/forward/api/v1/bikes/' + id,
    // {headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)});

    return this.http.get('/forward/api/v1/bikes/' + id, this.setAuthHeaders());
  }

  //this is public
  createBikeRegistration(bike){
    let body = JSON.stringify(bike);
    return this.http.post('/forward/api/v1/bikes',body, httpOptions);
  }

  private getToken(){
    return localStorage.getItem('access_token');
  }
  private setAuthHeaders(){
    return {headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.getToken())};
  }
}
