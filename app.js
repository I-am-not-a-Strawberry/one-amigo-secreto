//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigosLista = [];
let listaNumero = 0;

function limparCampo() {
    let campo = document.querySelector("input")
    campo.value = ''
}


function getAmigoNome() {
    let amigoNome = document.querySelector("input").value;
    if (amigoNome == '' || amigosLista.includes(amigoNome)) {
        alert("O nome não foi especificado, ou já está presente na lista.")
    } else {
        amigosLista.push(amigoNome)
        console.log(amigosLista)
        adicionarAmigoListaHTML()
    }
    limparCampo()
}


function adicionarAmigoListaHTML() {
    let minhaListaHTML = document.createElement("li");
    let addLista = document.createTextNode(amigosLista[listaNumero])
    minhaListaHTML.appendChild(addLista)
    document.getElementById("listaAmigos").appendChild(minhaListaHTML)
    listaNumero++
}


