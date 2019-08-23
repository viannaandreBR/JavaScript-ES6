// Spread of Object

const usuario1 = {
    nome: 'Andre',
    idade: '45',
    empresa: 'BioInformatica Labs'
}

const usuario2 = { ...usuario1, nome: 'Durval', idade:81}

console.log(usuario1);

console.log(usuario2);
