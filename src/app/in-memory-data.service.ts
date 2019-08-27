import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements  InMemoryDbService {
  
  createDb(){
    const movies=[

      {id:1, name:"movie 1",description:"horror",imageUrl:"https://cdn.pixabay.com/photo/2015/09/02/12/45/movie-918655__340.jpg"},
      {id:2, name:"movie 2",description:"fun",imageUrl:"https://cdn.pixabay.com/photo/2013/09/29/12/21/camera-188083__340.jpg"},
      {id:3, name:"movie 3",description:"history",imageUrl:"https://cdn.pixabay.com/photo/2019/04/24/21/55/cinema-4153289__340.jpg"},
      {id:4, name:"movie 4",description:"drama",imageUrl:"https://cdn.pixabay.com/photo/2017/03/13/17/25/clapper-2140602__340.jpg"},
      {id:5, name:"movie 5",description:"crime",imageUrl:"https://cdn.pixabay.com/photo/2015/03/24/00/46/food-686922__340.jpg"},
      {id:6, name:"movie 6",description:"adult",imageUrl:"https://cdn.pixabay.com/photo/2016/01/19/16/49/old-tv-1149416__340.jpg"},
  
  
  ];
  return {movies};
  }

  constructor() { }
}
