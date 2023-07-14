/*  
 o que precisamos fazer? -quando passar o mouse por cima do personagem na lista temos que adicionar a borda azul de seleção na imagem pequena do personagem e mostrar a imagem, o nome e o texto grande do personsagem que está selecionado

 OBJETIVO 1- quando passasr o mouse em cima do personagem devemos selecioná-lo.
     passo1 - pegar os personagens no JS pra poder verificar quando o usuario passar o mouse em cima de um deles
    passo 2 - adicionar calsse selecionado no personagem que o usuario passar o cursor do mouse
     passo 3 -verificar se já exista um personagem selecionado, se sim, devemos remover a seleção dele

 OBEJETIVO 2 - quando passar o mouse em cima do personagem na listagem, trocar a imagem o nome e a descrição do personagem grande
    passo1-  pegar o elemento do personagem grande pra adicionar as informações nele
    passo2 - alterar a imagem do personagem grande
    passo3 - alterar  o nome do personagem grande
    passo4 - alterar a descrição do personagem

*/
const itenCiclope = document.getElementById("ciclope")

const personagens = document.querySelectorAll(".personagem");

personagens.forEach((personagem) => {
    personagem.addEventListener("mouseenter", () => {
        removerSelacaoDopersonagem();
        personagem.classList.add("selecionado");
        alterarImagemPersonagemSelecionado(personagem);
        alterarNomePersonagemSelecionado(personagem);
        alterarDescricaoPersonagem(personagem);
    })
});

function alterarDescricaoPersonagem(personagem) {
    const descricaoPersonagem = document.getElementById("descricao-personagem");
    descricaoPersonagem.innerText = personagem.getAttribute("data-description");
}

function alterarNomePersonagemSelecionado(personagem) {
    const nomePersonagem = document.getElementById("nome-personagem");
    nomePersonagem.innerText = personagem.getAttribute("data-name");
}

function alterarImagemPersonagemSelecionado(personagem) {
    const imagemPersonagemGrande = document.querySelector(".personagem-grande");
    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
}

function removerSelacaoDopersonagem() {
    const persongemSelecionado = document.querySelector(".selecionado");
    persongemSelecionado.classList.remove("selecionado");
}

