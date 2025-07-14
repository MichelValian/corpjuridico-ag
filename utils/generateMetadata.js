// utils/generateMetadata.js

export async function generateMetadata({ params }) {
    const { id } = params;
  
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
      return { notFound: true }; // Devuelve un error 404 si no se encuentra el abogado
    }
  
    return {
      title: abogado.nombre, // Aquí puedes agregar metadatos como el título
      description: `Perfil del abogado ${abogado.nombre}, especializado en ${abogado.especialidad}`,
    };
  }
  