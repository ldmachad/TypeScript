interface Produto{
    nome: string
    preco: number
    descricao: string
}

let produto1: Produto = {
    nome: "Produto Um",
    preco: 10.50,
    descricao: "Descrição do produto um."
}

let produto2: Produto = {
    nome: "Produto Dois",
    preco: 19.90,
    descricao: "Descrição do produto dois."
}

const listaProdutos: Array<Produto> = [produto1, produto2];

console.log(...listaProdutos)