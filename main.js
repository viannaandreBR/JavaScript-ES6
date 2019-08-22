const usuario = {
    nome: 'Andre',
    idade: 46,
    endereco: {
    cidade: 'Rio de Janeiro',
    estado: 'RJ',
},
};

//const nome = usuario.nome;
//const idade = usuario.idade;

const { nome, idade, endereco: {estado} } = usuario;

//console.log(usuario);

//console.log(nome,idade);

console.log("Desestruturação usuário", nome, estado, idade);