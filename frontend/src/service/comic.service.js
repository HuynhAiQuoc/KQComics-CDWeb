


// const RAPID_KEY = '626395e262msh02ba9742602b4e1p1d8a23jsnc6576cb24819';
// const RAPID_KEY = 'a231414b5fmshe281d486bd98338p11077ejsn24b8965962c2';
// const RAPID_KEY = 'cb89962aa5mshb30a65017c9f699p1cbcd4jsn07353ee11054';
const RAPID_KEY = '';
const RAPID_HOST = 'webtoon.p.rapidapi.com';

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': RAPID_KEY,
        'X-RapidAPI-Host': RAPID_HOST
    }
};

const URL_EPISODE = 'https://webtoon.p.rapidapi.com/originals/episodes/list?language=en&titleNo=';
const URL_INFORMATION = 'https://webtoon.p.rapidapi.com/originals/episodes/get-info?language=en&titleNo=';


class ComicService {
    getEpisodes(titleNo) {
        return fetch(URL_EPISODE + titleNo, options)
            .then((response) => response.json())
            .then(res => {
                return res.message.result.episodeList.episode;
            })
            .catch(error => {

            });
    }

    getInformation(titleNo, episodeNo) {
        return fetch(URL_INFORMATION + titleNo + '&episodeNo=' + episodeNo, options)
            .then((response) => response.json())
            .then(res => {
                return res.message.result.episodeInfo.imageInfo;
            })
            .catch(error => {

            });
    }
}

export default new ComicService();