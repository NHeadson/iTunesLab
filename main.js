$('form').submit(function(e) {
  e.preventDefault();
  const endpoint = 'https://itunes.apple.com/search';
  const params = {
    term: document.getElementById('search-item').value,
    country: 'US',
    media: 'all',
    entity: 'allArtist',
    attribute: 'artistTerm',
    limit: 5,
  }

  $.get(endpoint,
    params,
    function (result) { 
      console.log('result', result);

      const $results = $('#results').html('');
      result.results.forEach(item => {
        $results.append('<h3>' + item.artistName + '</h3>');
      });
    },
    'json'
  );

  console.log('complete');

})