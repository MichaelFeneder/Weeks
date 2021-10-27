let message = document.querySelector("#message")

let addMovie = (event) => {

    event.preventDefault();
    
    let inputField = document.querySelector("input"); 

    let movie = document.createElement('Li');

    let movieTitle = document.createElement('span');

    movieTitle.textContent = inputField.value;

    movieTitle.addEventListener("click", crossOffMovie);

    movie.appendChild(movieTitle);

    let deleteBtn = document.createElement("button");

    deleteBtn.textContent = "x";

    deleteBtn.addEventListener("click", deleteMovie);

    movie.appendChild(deleteBtn);

    let list = document.querySelector('ul');

    list.appendChild(movie);

    inputField.value = "";



};

let form = document.querySelector("form");

form.addEventListener("submit", addMovie);

let deleteMovie = (event) => {

    event.target.parentNode.remove();

    message.textContent = 'Movie Deleted';

};

let crossOffMovie = (event) => {

    event.target.classList.toggle(checked);

};

