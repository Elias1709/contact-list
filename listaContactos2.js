const listaContactos = [{
    id: "1",
    nombres: "Elias ",
    apellidos: "Cordoba ",
    telefono: "454545599 ",
    ubicaciones: { ciudad: "Quibdo ", direccion: "Esmeralda " },
},
 {   id: "2",
    nombres: "Paola ",
    apellidos: "Mejia ",
    telefono: "233445555",
    ubicaciones: { ciudad: "Necocli ", direccion: "Centro " }
}

];

function agregarContacto (){
    if(listaContactos.length>1)
    {
        const agregar = listaContactos.push(
            {
                id: 3,
                nombres: "Lidis Stefany",
                apellidos: "Jaramillo Martinez",
                telefono: "44552258",
                ubicaciones: {ciudad: "Bogota", direccion: "Chapinero"}
        },
        {
            id: 4,
            nombres: "Nelson Styven",
            apellidos: "Andrade Cordoba",
            telefono: "333456778",
            ubicaciones: {ciudad: "Quibdo", direccion: "La 18"}
    }
    )
        return agregar;
   }
}

function eliminarContactos(){
    if(listaContactos.length>=2)
    {
        const eliminar = listaContactos.pop();
        return eliminar;
    }
    
}

function actualizarContacto(id, contactoActualizado) {
    const contactoIndex = listaContactos.findIndex((contacto) => contacto.id === id);
    if (contactoIndex !== -1) {
      listaContactos[contactoIndex] = contactoActualizado;
    }
}
  

function definitivaListaContactos(){
    const listaDef = listaContactos;
    return listaDef;
        
}   


console.log(agregarContacto(listaContactos));
console.log(eliminarContactos(listaContactos));

actualizarContacto("2", {
    id: "2",
    nombres: "Paola",
    apellidos: "Mejia",
    telefono: "999999999",
    ubicaciones: { ciudad: "Medellin", direccion: "Centro" },
  });

console.log(listaContactos);
console.log('-----------Despues de esta linea se mostrara la lista de contactos definitiva------------');

console.log(definitivaListaContactos(listaContactos));