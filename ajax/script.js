const $title = $('#title');
const $year = $('#year');
const $rated = $('#rated');

const promise = $.ajax({
    url:'http://www.omdbapi.com/?i=tt3896198&apikey=c1cd7da8'
});

promise.then(
  (data) => {
    $title.text(data.Title);
    $year.text(data.Year);
    $rated.text(data.Rated);
    console.log(data)
  },
  (error) => {
   console.log('bad request: ', error);
  }
);