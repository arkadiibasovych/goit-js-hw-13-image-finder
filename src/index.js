import './styles.css';
import refs from "./js/refs";


const apiKey = '19957123-092fe89d59c01359f45ab382b';
const pageNumber = 1;
const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${query}&page=${pageNumber}&per_page=12&key=${apiKey}`;

fetch(url);

refs.searchForm.addEventListener('submit', e => {
    e.preventDefault();
})