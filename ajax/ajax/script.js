const $title = $('#title');
const $year = $('#year');
const $rated = $('#rated');
const $input = $('input[type="text"]');
let movieData, userInput;
$('form').on('submit', handleGetData);
function handleGetData(event) {
    event.preventDefault();
   // calling preventDefault() on a 'submit' event will prevent a page refresh  
   // Grab the text the user typed in the input box:
   userInput = $input.val();
    $.ajax({
         url:'https://www.omdbapi.com/?apikey=53aa2cd6&t=' + userInput
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
function render() {
    $title.text(movieData.Title);
    $year.text(movieData.Year);
    $rated.text(movieData.Rated);
 }