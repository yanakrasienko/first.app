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

for (let i=0; i<2;i++){
  const a=prompt('Один из последних просмотренных фильмов?',''),
  b=prompt('Рейтинг?','');
 
  if(a!=null && b!=null && a!='' && b!='' && a.length<50){
    personalMovieDb.movies[a]=b;
    console.log('done');
  } else {
    console.log('error');
    i--;
  }
  if(personalMovieDb.count<10){
    console.log('мало');
  }else if(personalMovieDb.count>=10 && personalMovieDb.count<30){
    console.log('классный зритель');
  }else if(personalMovieDb.count>=30){
    console.log('вы киноман');
  }else{
    console.log('error');
  }
}



   console.log(personalMovieDb);
  
  