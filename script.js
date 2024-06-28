document.addEventListener('DOMContentLoaded', () => {
    fetch('movies.json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('movie-title').textContent = data.title;
            document.getElementById('movie-description').textContent = data.description;
            document.getElementById('movie-director').textContent = `Director: ${data.director}`;
            document.getElementById('movie-year').textContent = `Year: ${data.year}`;
            document.getElementById('movie-genre').textContent = `Genre: ${data.genre}`;
            document.getElementById('movie-cast').textContent = `Cast: ${data.cast}`;
            document.getElementById('movie-rating').textContent = `Rating: ${data.rating}`;
            document.querySelector('.video source').src = data.video;
            document.querySelector('.video video').load();
        })
        .catch(error => console.error('Error fetching movie data:', error));
});
