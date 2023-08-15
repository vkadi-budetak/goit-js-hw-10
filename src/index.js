import { fetchBreeds, fetchCatByBreed } from './js/cat-api';

const breedSelect = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');

const loader = document.querySelector('.loader');
const errorMessage = document.querySelector('.error');

if (loader) {
  loader.removeAttribute('hidden');
}
if (breedSelect) {
  fetchBreeds()
    .then(response => {
      if (response.data) {
        const options = response.data.map(element => {
          return `<option value="${element.id}">${element.name}</option>`;
        });
        breedSelect.innerHTML = options;
        loader.setAttribute('hidden', '');
        breedSelect.removeAttribute('hidden');
      }
    })
    .catch(error => {
      loader.setAttribute('hidden', '');
      errorMessage.removeAttribute('hidden');
      console.log(error);
    });

  breedSelect.addEventListener('change', e => {
    catInfo.setAttribute('hidden', '');
    errorMessage.setAttribute('hidden', '');
    loader.removeAttribute('hidden');
    fetchCatByBreed(e.target.value)
      .then(response => {
        if (response.data) {
          const { data } = response;
          catInfo.innerHTML = `<img src="${data[0].url}" width="${data[0].width}" height="${data[0].height}"/>`;
          catInfo.innerHTML += `<h2>${data[0].breeds[0].name}<h2/>`;
          catInfo.innerHTML += `<p>${data[0].breeds[0].description}<p/>`;
          catInfo.innerHTML += `<p>${data[0].breeds[0].temperament}<p/>`;
          loader.setAttribute('hidden', '');
          catInfo.removeAttribute('hidden');
        }
      })
      .catch(error => {
        loader.setAttribute('hidden', '');
        errorMessage.removeAttribute('hidden');
        console.log(error);
      });
  });
}
