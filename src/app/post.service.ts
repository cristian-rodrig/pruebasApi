import { Injectable } from '@angular/core';
import { HttpClient } from'@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient ) {

   }

  url: string = 'https://jsonplaceholder.typicode.com/posts' 
  getApi(){
   return this.http.get(this.url);
  }

  deletePost(id: number){
    return this.http.delete(`${this.url}/${id}`)
  }


}
