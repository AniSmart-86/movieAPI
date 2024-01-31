class Movie {
  constructor(name, genre) {
    this.name = name;
    this.genre = genre;
    this.available = true;
  }

  rentMovie() {
    if (this.available) {
      this.available = false;
      return `You have successfully rented ${this.name}.`;
    } else {
      return `Sorry, ${this.name} is currently not available for rent.`;
    }
  }

  returnMovie() {
    this.available = true;
    return `Thank you for returning ${this.name}.`;
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
const movie3 = new Movie('Black Cat', 'Adventure');
const movie4 = new Movie('The throne', 'Horror');
const movie5 = new Movie('Blade', 'Action');
const movie6 = new Movie('karat kid', 'Action');
const movie7 = new Movie('vengers', 'Drama');
const movie8 = new Movie('Soar mouth', 'Tv serise');
const movieStore = new MovieStore();

// Add movies to the store
movieStore.addMovie(movie1);
movieStore.addMovie(movie2);
movieStore.addMovie(movie3);
movieStore.addMovie(movie4);
movieStore.addMovie(movie5);
movieStore.addMovie(movie6);
movieStore.addMovie(movie7);
movieStore.addMovie(movie8);

// Rent and return movies
console.log(movie1.rentMovie());
console.log(movie2.rentMovie()); 
console.log(movie3.rentMovie());
console.log(movie4.rentMovie()); 
console.log(movie5.rentMovie());
console.log(movie6.rentMovie()); 
console.log(movie7.rentMovie()); 
console.log(movie3.returnMovie()); 

// List available movies
console.log(movieStore.listAvailableMovies());
