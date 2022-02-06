import axios from 'axios';

const BASE_URL = 'https://virtserver.swaggerhub.com/lkaybob/projectlion-vue/1.0.0';

export default {
  getArticle(id) {
    return axios.get(`${BASE_URL}posts/${id}`);
  },
};
