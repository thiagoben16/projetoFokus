const html = document.querySelector("html");
const botaoDescansoCurto = document.querySelector(".app__card-button--curto");
const botaoDescansoLongo = document.querySelector(".app__card-button--longo");
const botaoFoco = document.querySelector(".app__card-button--foco");
const imagem = document.querySelector(".app__image");



botaoFoco.addEventListener("click", function alteraFoco(){
    html.setAttribute("data-contexto", "foco")
    imagem.setAttribute('src', '/imagens/foco.png')
});


botaoDescansoCurto.addEventListener("click", function descansoCurto(){
    html.setAttribute("data-contexto", "descanso-curto")
    imagem.setAttribute('src', '/imagens/descanso-curto.png')
    
});

botaoDescansoLongo.addEventListener("click", function descansoLongo(){
    html.setAttribute("data-contexto", "descanso-longo")
    imagem.setAttribute('src',  '/imagens/descanso-longo.png')
})