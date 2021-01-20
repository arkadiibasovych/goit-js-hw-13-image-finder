
const apiKey = '19957123-092fe89d59c01359f45ab382b';



export default {
    searchQuery: '',
    page: 1,

    fetchGalleryItems(searchQuery) {
        
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${apiKey}`;

   return fetch(url)
       .then(res => res.json())
       .then(({ hits }) => {
           this.page += 1;
           return hits;
       })
     
       
        .catch(error => console.log(error));
    },
    
    resetPage() {
        this.page = 1;
    },
    get query() {
        return this.searchQuery;
    },

    set query(value) {
        this.searchQuery = value;
    },

};