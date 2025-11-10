const html = document.querySelector("html");
const botaoDescansoCurto = document.querySelector(".app__card-button--curto");
const botaoDescansoLongo = document.querySelector(".app__card-button--longo");
const botaoFoco = document.querySelector(".app__card-button--foco");
const imagem = document.querySelector(".app__image");



botaoFoco.addEventListener("click", function alteraFoco(){
    alterarContexto('foco')
});


botaoDescansoCurto.addEventListener("click", function descansoCurto(){
    alterarContexto('descanso-curto')
    
});

botaoDescansoLongo.addEventListener("click", function descansoLongo(){
    alterarContexto('descanso-longo')
})

function alterarContexto(contexto){
    html.setAttribute('data-contexto', contexto)
    imagem.setAttribute('src', `/imagens/${contexto}.png`)
};