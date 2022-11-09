const botaoIniciarCamera  = document.querySelector("[data-video-botao]")
const campoCamera = document.querySelector("[data-camera]")
const video = document.querySelector("[data-video]")
const botaoTiraFoto = document.querySelector("[data-tirar-foto]")
const canvas = document.querySelector("[data-video-canvas]")
const mensagem = document.querySelector("[data-mensagem]")
const botaoEnviarFoto = document.querySelector("[data-enviar]")

let imagemURL = ""

botaoIniciarCamera.addEventListener("click", iniciaCamera)

async function iniciaCamera(){
    const iniciarVideo = await navigator.mediaDevices.getUserMedia({ video: true, audio: false })

    botaoIniciarCamera.style.display = "none"
    campoCamera.style.display = "block"

    video.srcObject = iniciarVideo
}

botaoTiraFoto.addEventListener("click", tiraFoto)

function tiraFoto(){
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height)

    imagemURL = canvas.toDataURL("image/jpeg")

    campoCamera.style.display = "none"
    mensagem.style.display = "block"
}

botaoEnviarFoto.addEventListener("click", ()=>{
    const receberDadosExistentes = localStorage.getItem("cadastro")
    const converteretorno = JSON.parse(receberDadosExistentes)

    converteretorno.imagem = imagemURL

    localStorage.setItem('cadastro', JSON.stringify(converteretorno))

    window.location.href = "./abrir-conta-form-3.html"
})