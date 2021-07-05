const Cinema = function (films) {
  this.films = films;

  this.getFilmTitles = () => {
    return this.films.map((film) => {
      return film.title;
    });
  };

  this.getFilmByTitle = (title) => {
    // titles = this.films.map(film => film.title)
    // index = titles.indexOf(title);
    // return films[index];

    // return this.films.reduce((accumulator, film) => {
    //   if (film.title === title) {
    //     return title;
    //   }
    // })

    return (this.films.filter((film) => film.title === title))[0];
  };
};

// class Cinema{
//   constructor(films){
//     this.films = films;
//   }

//   getFilmTitles(){

//   }
// }

module.exports = Cinema;
