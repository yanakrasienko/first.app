"use strict";
const numberOfFilms= +prompt('Сколько фильмов посмотрели?','');
 
const personalMovieDb={
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
};
console.log(personalMovieDb["count"]);

const a=prompt('Один из последних просмотренных фильмов?',''),
  b=prompt('Рейтинг?','') ,
  c=prompt('Один из последних просмотренных фильмов?',''),
 f=prompt('Рейтинг?','') ;
  
   personalMovieDb.movies[a]=b;
   personalMovieDb.movies[c]=f;
   console.log(personalMovieDb);