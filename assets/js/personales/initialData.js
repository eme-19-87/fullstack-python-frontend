function getProductos(){
    return[
        {
            id:1,
            nombre:'Set Matero con Bolso Premium Crudo Super Deluxe',
            precio:'$57.295,00',
            rutaImg:'setMatero2.png',
            descripcion:'Set Matero De Prueba',
            categoria:"EquipoMatero",
            activo:1
         },
         {
        id:2,
         nombre:'Set Matero con Canasta Neo Negro',
         precio:'$33.115,00',
         rutaImg:'set_mate_2.png',
         descripcion:'Set Matero prueba 2',
         categoria:"EquipoMatero",
         activo:1
        },
        {
        id:3,
        nombre:'Set Matero con Bolso Premium Begin',
        precio:'$57.295,00',
        rutaImg:'setMatero3.png',
        descripcion:'Set Matero prueba 3',
        categoria:"EquipoMatero",
        activo:1
        },
        {
        id:4,
        nombre:'Set Matero con Bolso Premium Crudo',
        precio:'$57.295,00',
        rutaImg:'setMatero4.png',
        descripcion:'Set Matero De Prueba 4',
        categoria:"EquipoMatero",
        activo:1
        },
        {
            id:5,
            nombre:'Set Matero 5 De Cuero',
            precio:'$7600',
            rutaImg:'prod1.png',
            descripcion:'Set matero 5 de prueba cuero',
            categoria:'EquipoMatero',
            activo:1
        },
        {
        id:6,
        nombre:'Mate Pampa',
        precio:'$8.060,00',
        rutaImg:'mate1.jpeg',
        descripcion:'Prueba primer mate',
        categoria:"Mate",
        activo:1
     },
     {
        id:7,
     nombre:'Mate Uruguayo Camionero',
     precio:'$10.415,00',
     rutaImg:'mate2.jpeg',
     descripcion:'prueba segundo mate',
     categoria:"Mate",
     activo:1
    },
    
    ];
}

function setDatosIniciales(){
    const categoryData=JSON.stringify({
        datos:getProductos(),
        categorias:['Equipo Mate','Mate']
    });
    localStorage.setItem("data", categoryData);
}
