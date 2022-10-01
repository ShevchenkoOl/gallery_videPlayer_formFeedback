// // Add imports above this line
// import SimpleLightbox from "simplelightbox";
// import "simplelightbox/dist/simple-lightbox.min.css";
// import { galleryItems } from './gallery-items';
// // Change code below this line
// const render = galleryItems.map(item => `<div class="gallery__item">
// <a class:"gallery__link" href="${item.original}">
// <img class: "gallery__image" src="${item.preview}"
// data-source="${item.original}"
// alt= "${item.description}"/></a></div>`).join("");
// const galleryBox = document.querySelector('.gallery');
// galleryBox.insertAdjacentHTML("beforeend", render);
// galleryBox.addEventListener("click", e => {
//     e.preventDefault();
//     const lightbox = new SimpleLightbox(".gallery a", {
//         captionsData: "alt",
//         captionDelay: 250,
//     })
// })



// Add imports above this line
import { galleryItems } from './gallery-items';


// Change code below this line
console.log(galleryItems);

import SimpleLightbox from "simplelightbox";

import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryTemplate =({preview, original, description}) =>`
<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`

const imagesContainer = document.querySelector(".gallery");
const galleryList = galleryItems.map(galleryItem => galleryTemplate(galleryItem)).join('');
imagesContainer.insertAdjacentHTML("afterbegin", galleryList);

new SimpleLightbox('.gallery a', {
    captionsData: "alt",
	captionDelay: 250
})