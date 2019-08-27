import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { ActivatedRoute } from '@angular/router';
import { Location} from '@angular/common';

@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  @Input() movie:Movie;  
  
  constructor(
    private MovieService:MovieService,
    private route:ActivatedRoute, //id bilgisine ulaşmak için
    private location:Location
  ) { 
    
  }

  ngOnInit() {
    this.getMovie();
  }

  

    getMovie():void{
      const id=+this.route.snapshot.paramMap.get('id');  //route üzerindeki id parametresine ulasmak icin
      this.MovieService.getMovie(id).                     //+ int e çevirecek
      subscribe(movie=>this.movie = movie);
    }

    save():void{
      this.MovieService.update(this.movie).subscribe(()=>{
        this.location.back();
      });

    }

}
