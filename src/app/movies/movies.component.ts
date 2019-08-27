import { Component } from '@angular/core';

import { Movie }   from '../movie';
//import { Movies }  from '../movie.datasource';

import   { MovieService} from   '../movie.service';

@Component({
    selector:'movies',
    templateUrl:'movies.component.html'
})

export class MoviesComponent {
    title='Movie List';

    // movies=Movies service oldugu icin artık gereksiz.
    movies:Movie[]; //(!)
    selectedMovie:Movie;

    constructor(private MovieService:MovieService){
        
    }

    onSelect(movie:Movie):void{
        if(movie===this.selectedMovie)
        {
            this.selectedMovie=null;
        }
        else
        this.selectedMovie=movie;
       
    }

    /* getMovies(){
        this.movies=this.MovieService.getMovies();
        //buradaki movies(!)i doldurmak için constructor ile cagiririz yada oninit
        //ardından bu movies movieServicedeki get movies ne döndürürse o olur.
    } */
    

    ngOnInit(): void {

        this.getMovies();
    }

    getMovies():void {
        this.MovieService.getMovies()
        .subscribe(movies=>{
            this.movies=movies;
        });
    }


    add(name:string,imageUrl:string,description:string):void {
     
        this.MovieService.add({
            name,
            imageUrl,
            description
        } as Movie) .subscribe(movie=>this.movies.push(movie));


    }
    
    delete(movie:Movie){

        this.movies=this.movies.filter(m=>m!==movie);
        this.MovieService.delete(movie).subscribe();
        }

    
    
}