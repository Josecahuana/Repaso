//before
function saludar(namePerson) {
    namePerson = namePerson || 'Client';
    console.log('Hola, ' + namePerson + '!');
}

saludar();
saludar('Juan');

//after

const saludar = (namePerson = 'Luis') => `Hola ${namePerson}!`;
saludar();