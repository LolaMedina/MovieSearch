// API details
const apiUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=f3f08c027c288ebf1a09b168451ce353&language=en-US&page=1';
const img_path = 'https://image.tmdb.org/t/p/w500//';

// Select elements from html file
const main = document.querySelector('#main');

const truncate = (str, num) => {
    if(str.length >= num) {
        str = str.split(' ')
        return str.slice(0, num).join(' ') + '...'
    } 
   return str;
}

//Calling the movie API
let displayMovies = url => {
    fetch(url).then(res => res.json())
    .then(function(data){
        data.results.forEach(element =>{
            const div = document.createElement('div');
            const image = document.createElement('img');
            const movieTitle= document.createElement('h2');
            const text = document.createElement('p');
            
            movieTitle.innerHTML = `${element.title}`;
            text.innerHTML = truncate(`${element.overview}`, 10);
            image.src = img_path + element.poster_path;
            div.appendChild(image);
            div.appendChild(movieTitle);
            div.appendChild(text);
            main.appendChild(div);
        });
    }).catch(err => {
        const para = document.createElement('p');
        para.textContent = err;
        para.style.color = 'black';
        main.append(para)
    });
}



displayMovies(apiUrl);