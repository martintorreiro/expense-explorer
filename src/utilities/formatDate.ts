export const formatDate = (date:Date) => {
    const fechaActual = new Date().getTime();
    const fechaIngresada = new Date(date).getTime();
  
    const diferenciaEnMs = fechaActual - fechaIngresada;

    const segundos = Math.floor(diferenciaEnMs / 1000);
    const minutos = Math.floor(segundos / 60);
    const horas = Math.floor(minutos / 60);
    const dias = Math.floor(horas / 24);
    const semanas = Math.floor(dias / 7);
  
    if (diferenciaEnMs < 60000) { 
      return `Hace ${segundos} s`;
    } else if (diferenciaEnMs < 3600000) { 
      return `Hace ${minutos} m`;
    } else if (diferenciaEnMs < 86400000) { 
      return `Hace ${horas} h`;
    } else if (diferenciaEnMs < 604800000) { 
      return `Hace ${dias} d`;
    } else { 
      const dia = new Date(fechaIngresada).getDate();
      const mes = new Date(fechaIngresada).getMonth() + 1;
      const año = new Date(fechaIngresada).getFullYear() % 100;
      return `${dia}/${mes}/${año}`;
    }
  }