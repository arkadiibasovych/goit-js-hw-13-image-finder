import refs from './refs';
import galleryItems from '../templates/galleryItem.hbs'

function createGalleryItemsMarkup(hits) {
    const markUp = galleryItems(hits);
            refs.gallery.insertAdjacentHTML('beforeend', markUp)
};
 
export default createGalleryItemsMarkup;