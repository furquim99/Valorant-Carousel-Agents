const imagens = document.querySelectorAll(".slide");
const setaVoltar = document.getElementById("seta-voltar");
const setaAvancar = document.getElementById("seta-avancar");

let imagemAtual = 0;

setaAvancar.addEventListener("click", function(){
    // console.log(imagemAtual)
    // console.log(imagens.length)
    if(imagemAtual === imagens.length - 1) {
        return;
    }
    imagemAtual++;
    esconderImagemAberta();

    mostrarImagem();
    // imagens[imagemAtual].classList.add("mostrar")
    mostrarOuEsconderSetas();

})

setaVoltar.addEventListener("click", function(){
    if(imagemAtual === 0) {
        return;
    }
    imagemAtual--;
    esconderImagemAberta();

    mostrarImagem();
    // imagens[imagemAtual].classList.add("mostrar")

    mostrarOuEsconderSetas();
})

function esconderImagemAberta(){
    const imagemAberta = document.querySelector(".mostrar");
    imagemAberta.classList.remove("mostrar")
}

function mostrarOuEsconderSetas(){
    const negativoPrimeiraImagem = imagemAtual !== 0;
    if(negativoPrimeiraImagem){
        setaVoltar.classList.remove("opacidade");
    } else {
        setaVoltar.classList.add("opacidade");
    }

    const ultimaImagem = imagemAtual !== 0 && imagemAtual === imagens.length - 1;

    if(ultimaImagem){
        setaAvancar.classList.add("opacidade")
    } else {
        setaAvancar.classList.remove("opacidade");
    }
}

function mostrarImagem(){
    imagens[imagemAtual].classList.add("mostrar")
}
