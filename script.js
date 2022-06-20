//1 - crie uma função que exiba uma mensagem no console
function oi(){
    console.log('olá, mundo!')
}
oi()

//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console
function name(nome){
    console.log(nome)
}
name('Raquel')
//3 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console
function about(name, age, favorite){
    console.log(`Meu nome é ${name}, tenho ${age} anos e meu estilo musical favorito é ${favorite}`)
}
about('Raquel', '19', 'R&B')
//4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console
function A(filme, musica){
    console.log(`Um filme: ${filme}, Uma música: ${musica}`)
}
A('Ilha do Medo','Pray for Me - The Weeknd')

//5 - crie uma função que retorne o triplo do número recebido no parâmetro da função
function triplo(numero){
    return numero*3
}
console.log(triplo(3))