import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { Movies } from './movie.datasource';
import { observable , of, Observable }  from 'rxjs';
import { LoggingService } from './logging.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

     private apiMoviesUrl='api/movies';

     constructor(private LoggingService:LoggingService, private http:HttpClient) { }

     /* getMovies():Movie[]{
       return Movies;     //buda görüldüğü gibi datasource dödürüyor oradakide dizi.
     } */

     getMovies():Observable<Movie[]>{
       //HttpClient.get('') hazır apimiz yok 
       this.LoggingService.add('MovieService : listing movies');
       //return of(Movies);
       return this.http.get<Movie[]>(this.apiMoviesUrl);

      } 

     getMovie(id):Observable<Movie>{
       this.LoggingService.add('MovieService: get detail by id:' +id);
       //return of(Movies.find(movie=>movie.id === id));
       return this.http.get<Movie>(this.apiMoviesUrl + '/' + id);
     }
     update(movie:Movie):Observable<any>{//bilmediğim kodlar 
        const httpOptions={
         headers:new HttpHeaders({'Content-Type':'application/json'})
         };

       return this.http.put(this.apiMoviesUrl,movie, httpOptions);

     }

     add(movie:Movie):Observable<Movie>{
      return  this.http.post<Movie>(this.apiMoviesUrl,movie);
     }

     delete(movie:Movie):Observable<Movie>{
       return this.http.delete<Movie>(this.apiMoviesUrl+'/' + movie.id);
     }
}
