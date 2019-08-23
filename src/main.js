document.write('Update: Async/Await 2 (antes) <br><br><br>');
// Nova forma de trabalhar com programação assíncrona no JavaScript
// Promises forma de realizar ações de forma assíncrona com 10 segundos
// Asyc / Await função do ES8
// Necessita Biblioteca Adicional do babel
// yarn add @babel/plugin-transform-async-to-generator
//

const minhaPromise = () => new Promise((resolve,reject) => {
    setTimeout(() => { resolve('OK') } , 2000);  
});

async function executaPromise() {
   const response = await minhaPromise();
   
    console.log(response);
    document.write('Update: Async/Await 2 (depois) <br><br><br>');
    document.write(response);
}

executaPromise();
