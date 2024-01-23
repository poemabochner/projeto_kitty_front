import api from './api';

const obterTodos = () => {
  return api.get('/api/ingrediente')
    .then((response) => response.data)
    .catch((error) => Promise.reject(error))
}

const cadastrar = (ingrediente) => {
  return api.post('/api/ingrediente', ingrediente)
      .then((response) => response.data)
      .catch((error) => Promise.reject(error))
}

const atualizar = (ingrediente) => {
  return api.put(`api/ingrediente/${ingrediente.idIngrediente}`, ingrediente)
      .then((response) => response.data)
      .catch((error) => Promise.reject(error))
}

const deletar = (id) => {
  return api.delete(`/api/ingrediente/${id}`)
  .then((response) => response.data)
  .catch((error) => Promise.reject(error))
}

export default { obterTodos, deletar, cadastrar, atualizar }