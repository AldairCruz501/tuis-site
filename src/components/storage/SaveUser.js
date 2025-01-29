// Función para guardar el token en el localStorage
export const saveToken = (token) => {
    try {
      localStorage.setItem('authToken', token);
      console.log('Token guardado correctamente.');
    } catch (error) {
      console.error('Error al guardar el token:', error);
    }
  };
  
  // Función para obtener el token del localStorage
  export const getToken = () => {
    try {
      const token = localStorage.getItem('authToken');
      return token;
    } catch (error) {
      console.error('Error al obtener el token:', error);
      return null;
    }
  };

  //Funcion eliminar token
  export const removeToken = () => {
    try {
      localStorage.removeItem('authToken');
      console.log('Token eliminado correctamente.');
    } catch (error) {
      console.error('Error al eliminar el token:', error);
    }
  };
