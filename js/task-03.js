import images from './data/images.js';

// Вариант решения №1

// const galleryList = document.querySelector('#gallery');

// const makeImageCard = ({ url, alt }) => {
//   const galleryEl = document.createElement('li');
//   galleryEl.classList.add('gallery__element');

//   const galleryImage = document.createElement('img');
//   galleryImage.classList.add('gallery__image');
//   galleryImage.src = url;
//   galleryImage.alt = alt;
  
//   galleryEl.append(galleryImage);

//   return galleryEl;
// };

// galleryList.append(...images.map(makeImageCard));



// Вариант решения №2

const galleryList = document.querySelector('#gallery');

const createGalleryCards = images => {
    let elementsList = ''
    images.forEach(image => {
        const galleryCard = `<li class="gallery__element"><img class="gallery__image" src="${image.url}" alt="${image.alt}"></li>`
        elementsList += galleryCard; 
    });
    return elementsList;
}

galleryList.insertAdjacentHTML('afterbegin', createGalleryCards(images));