import api from './api';

const obterTodos = () => {
  return api.get('/api/lanche')
    .then((response) => response.data)
    .catch((error) => Promise.reject(error))
}

export default { obterTodos }