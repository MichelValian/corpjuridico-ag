// Ejemplo con datos estáticos
export async function generateMetadata({ params }) {
    const { id } = params;
    console.log('id recibido:', id); // Verifica que el id esté siendo pasado correctamente
  
    const abogados = [
      {
        id: 'alfonso-alvarado',
        nombre: 'Lic. Alfonso Alvarado Guzmán',
        especialidad: 'Derecho Familiar',
        cedula: '9328307',
        imagen: '/img/alfonso.jpg',
      },
      {
        id: 'christopher-hernandez',
        nombre: 'Lic. Christopher Hernández Aguilar',
        especialidad: 'Derecho Penal',
        cedula: '9328307',
        imagen: '/img/christopher.jpg',
      },
      {
        id: 'esteban-romero',
        nombre: 'Lic. Esteban Romero Navarro',
        especialidad: 'Derecho Civil',
        cedula: '9328307',
        imagen: '/img/esteban.jpg',
      },
    ];
  
    const abogado = abogados.find((a) => a.id === id);
    if (!abogado) {
      console.log('No se encontró abogado con id:', id); // Agregar log para verificar
      return {
        notFound: true, // Devuelve 404 si no se encuentra el abogado
      };
    }
  
    return {
      props: {
        abogado,
      },
    };
  }
  