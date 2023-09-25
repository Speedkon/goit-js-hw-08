import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryList = document.querySelector('.gallery');

const galleryMarkup = galleryItems.map(item => `
<li class="gallery__item" data-preview=${item.preview}>
    <a class="gallery__link" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
    </a>
</li>
`).join('');

galleryList.insertAdjacentHTML('beforeend', galleryMarkup);

const lightboxModal = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDeay: 250,
});
console.log(galleryItems);
