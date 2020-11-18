const __slide = document.querySelector('section.galeria .slide .itens .conteudo')

// Imagens

const __imagemUm = __slide.querySelector('.imagem img.fixa.um')
const __imagemUmZoom = __slide.querySelector('.imagem img.zoom.um')

const __imagemDois = __slide.querySelector('.imagem img.fixa.dois')
const __imagemDoisZoom = __slide.querySelector('.imagem img.zoom.dois')

const __imagemTres = __slide.querySelector('.imagem img.fixa.tres')
const __imagemTresZoom = __slide.querySelector('.imagem img.zoom.tres')

const __imagemQuatro = __slide.querySelector('.imagem img.fixa.quatro')
const __imagemQuatroZoom = __slide.querySelector('.imagem img.zoom.quatro')

const __imagemCinco = __slide.querySelector('.imagem img.fixa.cinco')
const __imagemCincoZoom = __slide.querySelector('.imagem img.zoom.cinco')

// Eventos

__imagemUm.onmouseover = function() {
  __imagemUmZoom.classList.add('mostrar')
}

__imagemUm.onmouseout = function() {
  __imagemUmZoom.classList.remove('mostrar')
}

__imagemDois.onmouseover = function() {
  __imagemDoisZoom.classList.add('mostrar')
}

__imagemDois.onmouseout = function() {
  __imagemDoisZoom.classList.remove('mostrar')
}

__imagemTres.onmouseover = function() {
  __imagemTresZoom.classList.add('mostrar')
}

__imagemTres.onmouseout = function() {
  __imagemTresZoom.classList.remove('mostrar')
}

__imagemQuatro.onmouseover = function() {
  __imagemQuatroZoom.classList.add('mostrar')
}

__imagemQuatro.onmouseout = function() {
  __imagemQuatroZoom.classList.remove('mostrar')
}

__imagemCinco.onmouseover = function() {
  __imagemCincoZoom.classList.add('mostrar')
}

__imagemCinco.onmouseout = function() {
  __imagemCincoZoom.classList.remove('mostrar')
}
