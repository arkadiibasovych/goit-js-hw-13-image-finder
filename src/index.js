import './styles.css';
import refs from "./js/refs";




refs.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    const form = e.currentTarget;
    const inputValue = form.elements.query.value;
    console.log(inputValue);



    const apiKey = '19957123-092fe89d59c01359f45ab382b';
    const pageNumber = 1;
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${inputValue}&page=${pageNumber}&per_page=12&key=${apiKey}`;

    fetch(url).then(res => res.json())
        .then(({ hits }) =>
            console.log(hits));
});