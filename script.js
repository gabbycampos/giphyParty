const API_KEY = "B6xcywUhHq32kNk4g26FL2GNonY9lVDi";

const form = document.querySelector('#form');
const remove = document.querySelector('.removeBtn');

form.addEventListener('submit', getGiphy);
remove.addEventListener('click', removeGiphy);

function getGiphy(e) {
  e.preventDefault();
  let url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&limit=1&rating=g&lang=en&q=`
  let input = document.querySelector('#giphyInput').value.trim();
  url = url.concat(input);
  //console.log(url)

  fetch(url)
    .then(response => response.json())
    .then(content => {
      //console.log(content.data)
      let newDiv = document.createElement('div');
      let img = document.createElement('img');
      img.src = content.data[0].images.original.url;
      img.alt = content.data[0].title;

      img.classList.add('giphImg');

      newDiv.append(img);
      let results = document.querySelector('#results');
      results.append(newDiv);

      document.querySelector('#giphyInput').value = '';
    })
    .catch(err => {
      console.error(err)
    })
}

function removeGiphy(e) {
  location.reload();
}

