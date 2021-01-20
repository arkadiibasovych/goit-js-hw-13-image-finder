const apiKey = '19957123-092fe89d59c01359f45ab382b';

function fetchGalleryItems(searchQuery, page =1) {
    
    
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${page}&per_page=12&key=${apiKey}`;

   return fetch(url)
       .then(res => res.json())
       
        
        .catch(error => console.log(error));

    
};

export default fetchGalleryItems;