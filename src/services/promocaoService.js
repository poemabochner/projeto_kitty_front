import api from './api';

const obterTodos = () => {
  return api.get('/api/promocao')
    .then((response) => response.data)
    .catch((error) => Promise.reject(error))
}
const deletar = (id) => {
  return api.delete(`/api/promocao/${id}`)
  .then((response) => response.data)
  .catch((error) => Promise.reject(error))
}
export default { obterTodos, deletar }