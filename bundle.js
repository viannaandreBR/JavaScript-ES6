"use strict";

var usuario = {
  nome: 'Andre',
  idade: 46,
  endereco: {
    cidade: 'Rio de Janeiro',
    estado: 'RJ'
  }
}; //const nome = usuario.nome;
//const idade = usuario.idade;

var nome = usuario.nome,
    idade = usuario.idade,
    estado = usuario.endereco.estado; //console.log(usuario);
//console.log(nome,idade);

console.log("Desestruturação usuário", nome, estado, idade);
