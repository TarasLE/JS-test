// import './styles.css';
// import 'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.4/lodash.min.js'
// import '../node_modules/lodash/lodash'

let testString = '';
console.log(testString.length);
console.log(testString==0);
testString = '   ';
console.log(testString);
console.log(testString.trim());
console.log(testString.trim().length);
let newString = testString.trim();
console.log(newString.length === 0);




const refs = {
    searchForm: document.querySelector('.js-search-form'), 
    countriesContainer: document.querySelector('.js-countries-container')
}
// var debounce = require('lodash.debounce');
refs.searchForm.addEventListener('input', _.debounce(onSearch,500))
// console.log(refs.searchForm);

let searchQuery = '';
function onSearch(event) {
    event.preventDefault();

    searchQuery = event.target.value
    console.log(searchQuery);

    const option = {
        headers: {}
    }

    const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`

    // fetch(url, option).then(response => response.json()).then(console.log)
    fetch(url, option).then(response => response.json()).
        then(data => {
            console.log(data.length);
            if (data.length > 10)
            { console.log('too many variants'); }
            else if(data.length===1){console.log("my country");}
            else console.log('OK')
        })
    // console.log(searchQuery);
  
}

// console.log('test1');

// const url = 'https://restcountries.eu/rest/v2/name/Colombia'
// const option = {
//         headers: {}
//     }
// fetch(url, option).then(response => response.json()).then(console.log)
console.log(searchQuery);

