const namePerson = 'Luis';

//before
if(namePerson){
    console.log('Bienvenido');
}else{
    console.log('Nombre no encontrado');
}

//after
let request = namePerson ? 'Bienvenido' : 'Nombre no encontrado';
console.log(request);