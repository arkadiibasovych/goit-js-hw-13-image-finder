import './styles.css';
import refs from "./js/refs";
import createGalleryItemsMarkup from './js/create-gallery-items-markup';
import apiService from './js/apiService';

import "@pnotify/core/dist/PNotify.css"
import '@pnotify/core/dist/BrightTheme.css';
import { error } from "@pnotify/core";





refs.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    const form = e.currentTarget;
    
    apiService.query = form.elements.query.value;
    
    refs.gallery.innerHTML = "";
    form.reset();
    apiService.resetPage();
    refs.loadMoreBtn.classList.add('is-hidden');

    apiService.fetchGalleryItems()
        .then(hits => {
            createGalleryItemsMarkup(hits);
        
            if(hits.length === 0) {error({
            title: 'No results were found for your request! Try again.',
            hide: true,
                delay: 2000
            })
            };
            
            if (hits.length > 0) {
                refs.loadMoreBtn.classList.remove('is-hidden');
                refs.clearBtn.classList.remove('is-hidden')
            }
        });
    
});

refs.loadMoreBtn.addEventListener('click', () => {
    
   apiService.fetchGalleryItems()
        .then(hits  => {
            createGalleryItemsMarkup(hits);
            const documentHeight = document.documentElement.offsetHeight;

        window.scrollTo({
            top: documentHeight,
           
        })
            
        });
});

refs.clearBtn.addEventListener('click', () => {
    refs.gallery.innerHTML = "";
    refs.loadMoreBtn.classList.add('is-hidden');
    refs.clearBtn.classList.add('is-hidden')

})


