const html = document.querySelector('html');
const focoButton = document.querySelector('.app__card-button--foco');
const shortButton = document.querySelector('.app__card-button--curto');
const longButton = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const texto = document.querySelector('.app__title-strong');
const aButtons = document.querySelectorAll('.app__card-button');
const startPauseBt = document.querySelector('#start-pause');
const musicaFocoinout = document.querySelector('#alternar-musica');
const iniciarOuPausarBt = document.querySelector('#start-pause span')
const musica = new Audio('/sons/luna-rise-part-one.mp3');
const songBeep = new Audio('/sons/beep.mp3');
const songPause = new Audio('/sons/pause.mp3');
const songPlay = new Audio('/sons/play.wav');

console.log(iniciarOuPausarBt)

let tempoDecorridoSegundos = 5
let intervaloId = null


musica.loop = true

musicaFocoinout.addEventListener('change', () => {
  if(musica.paused) {
    musica.play()
  } else {
    musica.pause()
  }
})


focoButton.addEventListener('click', () => {
  // html.setAttribute('data-contexto', 'foco');
  // banner.setAttribute('src', '/imagens/foco.png')
  alterarContexto('foco');
  focoButton.classList.add('active');
});

shortButton.addEventListener('click', () => {
  // html.setAttribute('data-contexto', 'descanso-curto');
  // banner.setAttribute('src', '/imagens/descanso-curto.png')
  alterarContexto('descanso-curto');
  shortButton.classList.add('active');
});

longButton.addEventListener('click', () => {
    // html.setAttribute('data-contexto', 'descanso-longo');
    // banner.setAttribute('src', '/imagens/descanso-longo.png')
    alterarContexto('descanso-longo');
    longButton.classList.add('active');
  });


function alterarContexto(contexto) {
  console.log(contexto)
  aButtons.forEach(function (contexto){
    contexto.classList.remove('active')
  });
  html.setAttribute('data-contexto', contexto);
  banner.setAttribute('src', `/imagens/${contexto}.png`)
  switch (contexto) {
    case "foco":
        titulo.innerHTML = `
        Otimize sua produtividade,<br>
        <strong class="app__title-strong">mergulhe no que importa.</strong>
        `
        break;
    case "descanso-curto":
        titulo.innerHTML = `
        Que tal dar uma respirada?<br>
        <strong class="app__title-strong">Faça uma curta pausa!</strong>
        `
      break;
    case "descanso-longo":
      titulo.innerHTML = `
      Hora de voltar para a superfície.<br>
      <strong class="app__title-strong">Faça uma pausa longa.</strong>
      `
      break;
    default:
        break;
  }

}

const contagemRegressiva = () => {
  if(tempoDecorridoSegundos <= 0) {
    alert('tempo finalizado')
    zerar()
    //songBeep.play()
    return
  }

  tempoDecorridoSegundos -= 1
  console.log('Temporizador' + tempoDecorridoSegundos)
}

startPauseBt.addEventListener('click', iniciarOuPausar)

function iniciarOuPausar() {
  if (intervaloId){
    zerar()
    songPause.play()
    return  
  } else {
    songPlay.play();
  }

  intervaloId = setInterval(contagemRegressiva, 1000)

  // iniciarOuPausarBt.innerHTML = "<strong>Pausar</strong>"
  iniciarOuPausarBt.textContent = "Pausar"
}


function zerar() {
  clearInterval(intervaloId)
  iniciarOuPausarBt.textContent = "Começar"
  intervaloId = null
}

// getAttribute
// setAttribute
// hasAttribute
// removeAttribute
