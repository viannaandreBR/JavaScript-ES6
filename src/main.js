document.write('Update: Async/Await 1 (antes) <br><br><br>');
// Nova forma de trabalhar com programação assíncrona no JavaScript
// Promises forma de realizar ações de forma assíncrona com 10 segundos

const minhaPromise = () => new Promise((resolve,reject) => {
    setTimeout(() => { resolve('OK') } , 10000);  
});

minhaPromise().then(response => {
  document.write('Update: Async/Await 1 (depois) <br><br><br>');
  document.write('Resultado da Consulta a Promise =>>>');
  document.write(response);
})

