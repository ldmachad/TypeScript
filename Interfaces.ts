interface Usuario{
    nome: string
    sobrenome: string
    idade: number
    login: string
    senha: string
}

let usuario1: Usuario = {
    nome: "Leonardo",
    sobrenome: "Machado",
    idade: 29,
    login: "dev.leonardomachado@gmail.com",
    senha: "123456"
}

let usuario2: Usuario = {
    nome: "User",
    sobrenome: "Admin",
    idade: 30,
    login: "useradmin@admin.com",
    senha: "654321"
}

console.log(usuario1)

console.log(usuario2)