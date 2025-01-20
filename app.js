//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigosLista = [];
let listaNumero = 0;


// Limpa o campo em que escreve o nome do amigo
function limparCampo() {
    let campo = document.querySelector("input")
    campo.value = ''
}



// Mostra o último elemento de amigosLista na lista do HTML
function adicionarAmigoListaHTML() {
    let minhaListaHTML = document.createElement("li");
    let addLista = document.createTextNode(amigosLista[listaNumero])
    minhaListaHTML.appendChild(addLista)
    document.getElementById("listaAmigos").appendChild(minhaListaHTML)
    listaNumero++
}

// Pega o nome escrito e coloca em amigosLista

function getAmigoNome() {
    let amigoNome = document.querySelector("input").value;
    // Impede de colocar um nome que não existe
    // ou um que já foi colocado
    if (amigoNome == '' || amigosLista.includes(amigoNome)) {
        alert("O nome não foi especificado, ou já está presente na lista.")
    } else {
        amigosLista.push(amigoNome)
        console.log(amigosLista)
        adicionarAmigoListaHTML()
        document.getElementById("sortear").removeAttribute("disabled")
    }
    limparCampo()
}

function sortearAmigo() {
    let listaIndex = parseInt((Math.random()) * amigosLista.length)
    let amigoSorteadoTemp = amigosLista[listaIndex]
    let amigoSorteado = document.getElementById("resultado")
    amigoSorteado.innerHTML = `${amigoSorteadoTemp} foi sorteado(a)!`
    console.log(amigosLista[listaIndex])
}



