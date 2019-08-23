document.write('Update: Async/Await 1');
// Nova forma de trabalhar com programação assíncrona no JavaScript
// Promises forma de realizar ações de forma assíncrona

const minhaPromise = () => new Promise((resolve,reject) => {
    setTimeout(() => { resolve('OK') } , 2000);  
});

minhaPromise().then(response => {
  document.write('\n\n\n');
  document.write('Resultado da Consulta a Promise');
  document.write(response);
})
