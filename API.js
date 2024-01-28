class Movie {
  constructor(blackCat, smart) {
    this.blackCat = blackCat;
    this.smart = smart;
    this.available = true;
  }

  rentMovie() {
    if (this.available) {
      this.available = false;
      return `You have successfully rented ${this.blackCat}.`;
    } else {
      return `Sorry, ${this.blackCat} is currently not available for rent.`;
    }
  }

  returnMovie() {
    this.available = true;
    return `Thank you for returning ${this.blackCat}.`;
  }
}

class MovieStore {
  constructor() {
    this.movies = [];
  }

  addMovie(movie) {
    this.movies.push(movie);
  }

  listAvailableMovies() {
    return this.movies.filter((movie) => movie.available);
  }
}

// Instantiate Movies and MovieStore
const movie1 = new Movie('Inception', 'Sci-Fi');
const movie2 = new Movie('The Shawshank Redemption', 'Drama');
const movieStore = new MovieStore();

// Add movies to the store
movieStore.addMovie(movie1);
movieStore.addMovie(movie2);

// Rent and return movies
console.log(movie1.rentMovie());
console.log(movie2.rentMovie()); 
console.log(movie1.returnMovie()); 

// List available movies
console.log(movieStore.listAvailableMovies());
