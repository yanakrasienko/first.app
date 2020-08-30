"use strict";

let numberOfFilms;

function start() {
  numberOfFilms = +prompt("Сколько фильмов посмотрели?", "");

  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов посмотрели?", "");
  }
}
start();
const personalMovieDb = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};
console.log(personalMovieDb["count"]);
function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt("Один из последних просмотренных фильмов?", ""),
      b = prompt("Рейтинг?", "");

    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
      personalMovieDb.movies[a] = b;
      console.log("done");
    } else {
      console.log("error");
      i--;
    }
  }}
  rememberMyFilms();

  function detectPersonalLevel() {
    if (personalMovieDb.count < 10) {
      console.log("просмотрено мало фильмов");
    } else if (personalMovieDb.count >= 10 && personalMovieDb.count < 30) {
      console.log("вы классический зритель");
    } else if (personalMovieDb.count >= 30) {
      console.log("вы киноман");
    } else {
      console.log("произошла ошибка");
    }
  
}
detectPersonalLevel();
console.log(personalMovieDb);

function showMyDB(hidden){
if(!hidden){
console.log(personalMovieDb);

  }
}
showMyDB(personalMovieDb.privat);

function writeYourGenres(){
for (let i=1;i<=3;i++){
 
  personalMovieDb.genres[i-1]= prompt(`Ваш любимый жанр под номером ${i}`);
}
}

writeYourGenres();