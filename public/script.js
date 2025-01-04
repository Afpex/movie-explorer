document.getElementById('search').addEventListener('input', async (event) => {
  const query = event.target.value;
  if (query.length < 3) return;

  const response = await fetch(`/api/movies?query=${query}`);
  const data = await response.json();

  const moviesContainer = document.getElementById('movies');
  moviesContainer.innerHTML = '';

  data.results.forEach(movie => {
      const div = document.createElement('div');
      div.classList.add('movie');
      div.innerHTML = `<h2>${movie.title}</h2><p>${movie.overview}</p>`;
      moviesContainer.appendChild(div);
  });
});
