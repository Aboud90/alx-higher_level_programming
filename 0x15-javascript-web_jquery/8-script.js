const url = 'https://swapi-api.hbtn.io/api/films/?format=json';
$.get(url, function (info) {
  const films = info.results;
  for (let i = 0; i < films.length; i++) {
    $('UL#list_movies').append('<li>' + films[i].title + '</li>');
  }
});
