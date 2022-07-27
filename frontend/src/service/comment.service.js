import axios from 'axios';

const API_URL = 'http://localhost:8081/rest/comment/';

class CommentService {
    add(content, userId, titleNo) {
        return axios
            .post(API_URL + "add", {
                content,
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

    getComments(titleNo) {
        return axios.post(API_URL + "comments", {
            titleNo
        })
            .then(response => {
                return response
            })
            .catch(function (error) {
                console.log(error);
            });
    }

}

export default new CommentService();