import axios from 'axios';

function UsuarioServicioLogin(usuario) {
    try {
      const response =  axios.get('http://127.0.0.1:3001/api/usuarios/autenticar', usuario);
      return response.data;
    } catch (error) {
      console.error('Error al obtener las tareas:', error);
      throw error;
    }
}
export {UsuarioServicioLogin}

