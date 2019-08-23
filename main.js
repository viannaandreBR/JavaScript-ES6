const usuario = {
    nome: 'Andre',
    idade: 46,
    empresa: 'BioinformaitcaLabs'
};

const { nome, ...resto } = usuario;

console.log(nome);

console.log(resto);

console.log("Nome ====================>", nome);

console.log("Informações Restante ====>", resto);