//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigosLista = [];


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
    }
    limparCampo()
}


