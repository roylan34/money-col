const API_URL = 'https://jsonplaceholder.typicode.com/';

export default {
  auth: {
    login: `${API_URL}/login`,
    logout: `${API_URL}/logout`,
  },
  todo: {
    getTodos: `${API_URL}/todos`,
  },
};
