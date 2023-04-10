const listaContactos= ["Paola", "Deison", "Glendy", "Nelson" ];


console.log(listaContactos);
console.log(agregarContactos(listaContactos));
console.log(eliminarContactos(listaContactos));

console.log(definitivaListaContactos(listaContactos));


function agregarContactos(){
    if(listaContactos.length>3)
    {
        const agregar = listaContactos.push("Mama");
        return agregar;
    }
    
}  

function eliminarContactos(){
    if(listaContactos.length>=4)
    {
        const eliminar = listaContactos.pop();
        return eliminar;
    }
    
} 

function definitivaListaContactos(){
    const listaDef = listaContactos;
    return listaDef;
        
}   