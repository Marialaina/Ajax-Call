let movieData;

$('form').on('submit', handleGetData);

const handleGetData = (event) => {
    event.preventDefault();
$.ajax({
    url: 'http://www.omdbapi.com/?i=tt3896198&apikey=c1cd7da8'
}).then(
  (data) => {
      movieData = data;
      render();
  },
  (error) => {
    console.log('bad request', error);
   }
);
}

const render = () => {
    const $title = $('#title');
    const $year = $('#year');
    const $rated = $('#rated');
}