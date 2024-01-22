import api from './api';

const obterTodos = () => {
  return api.get('/api/ingrediente')
    .then((response) => response.data)
    .catch((error) => Promise.reject(error))
}

const deletar = (id) => {
  return api.delete(`/api/ingrediente/${id}`)
  .then((response) => response.data)
  .catch((error) => Promise.reject(error))
}

export default { obterTodos, deletar }