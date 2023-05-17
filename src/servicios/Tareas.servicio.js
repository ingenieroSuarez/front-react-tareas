import axios from 'axios';

class TareasServicio {
  async obtenerTareas() {
    try {
      const response = await axios.get('http://127.0.0.1:3001/api/tareas');
      return response.data;
    } catch (error) {
      console.error('Error al obtener las tareas:', error);
      throw error;
    }
  }
}

module.exports={TareasServicio}