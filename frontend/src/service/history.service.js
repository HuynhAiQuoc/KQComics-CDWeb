
import axios from 'axios';

const API_URL = 'http://localhost:8081/rest/history/';


class HistoryService {
    getHistories(userId) {
        return axios.post(API_URL + "histories", {
            userId
        })
            .then(response => {
                return response
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    add(userId, titleNo, episodeNo) {
        return axios
            .post(API_URL + "add", {
                userId,
                titleNo,
                episodeNo
            })
            .then(response => {
                return response;
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    getSingleHistory(userId, titleNo) {
        return axios
            .post(API_URL + "history_comic", {
                userId,
                titleNo
            })
            .then(response => {
                return response;
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    delete(id) {
        return axios.delete(API_URL + id)
    }

}

export default new HistoryService();