const html = document.querySelector("html");
const botaoDescansoCurto = document.querySelector(".app__card-button--curto");
const botaoDescansoLongo = document.querySelector(".app__card-button--longo");
const botaoFoco = document.querySelector(".app__card-button--foco");
const imagem = document.querySelector(".app__image");
const titulo = document.querySelector(".app__title")

botaoFoco.classList.remove('active')



botaoFoco.addEventListener("click", function alteraFoco(){
    alterarContexto('foco')
    botaoFoco.classList.add("active")
    botaoDescansoLongo.classList.remove("active")
    botaoDescansoCurto.classList.remove("active")
    
});


botaoDescansoCurto.addEventListener("click", function descansoCurto(){
    botaoDescansoCurto.classList.add("active")
    botaoFoco.classList.remove('active')
    botaoDescansoLongo.classList.remove("active")
    alterarContexto('descanso-curto')
    alteraTitulo("Texto alterado")
    
   
    
    
});

botaoDescansoLongo.addEventListener("click", function descansoLongo(){
    botaoFoco.classList.remove('active')
    botaoDescansoCurto.classList.remove("active")
    botaoDescansoLongo.classList.add('active')
    alterarContexto('descanso-longo')
    
})

function alterarContexto(contexto){
    html.setAttribute('data-contexto', contexto)
    imagem.setAttribute('src', `/imagens/${contexto}.png`);
    switch(contexto){

        case "foco":
            titulo.innerHTML = `Otimize sua produtividade, <strong class= "app__title-strong">mergulhe no que importa</strong>`
            break;
        case "descanso-curto":
            titulo.innerHTML =`Que tal dar uma respirada? <strong class="app__title-strong">faça uma pausa curta</strong>`
            break;
        case "descanso-longo":
            titulo.innerHTML =`Hora de voltar a superfície, <strong class="app__title-strong">faca uma pausa longa</sgtrong>`
            break;
        default:
            break;

    }
    

};

