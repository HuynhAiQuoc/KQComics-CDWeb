
const API_KEY = '626395e262msh02ba9742602b4e1p1d8a23jsnc6576cb24819';

function getData ( url) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': API_KEY,
            'X-RapidAPI-Host': 'webtoon.p.rapidapi.com'
        }
    };
    return fetch(url, options).then(response => response.json())
}

export default getData;

