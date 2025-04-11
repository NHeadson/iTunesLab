$('form').submit(function(e) {
  e.preventDefault();
  const endpoint = 'https://itunes.apple.com/search';
  const params = {
    term: document.getElementById('search-item').value,
    media: 'music',
    limit: 10,
  }

  $.get(endpoint,
    params,
    function (result) { 
      console.log('result', result);
      const $results = $('#results').html('');
      result.results.forEach(item => {
        const artistName = item.artistName || 'Unknown';
        const songName = item.trackName || 'Untitled';
        const coverArt = item.artworkUrl100 || '';
        const albumName = item.collectionName || '';

        $results.append(`
          <div class="result-item">
            <img src="${coverArt}" alt="${songName} Cover Art">
            <p>\n\t${albumName}</p>
            <h3>${songName}</h3>
            <h5>by</h5>
            <h4>${artistName}</h4>
          </div>
        `);
      });
    },
    'json'
  );

  console.log('complete');

})