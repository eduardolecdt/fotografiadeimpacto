const __slide = document.querySelector('section.galeria .slide .itens .conteudo')

// Imagens

const __imagemUm = __slide.querySelector('.imagem img.fixa.slide1')
const __imagemUmZoom = __slide.querySelector('.imagem img.zoom.slide1')

const __imagemDois = __slide.querySelector('.imagem img.fixa.slide2')
const __imagemDoisZoom = __slide.querySelector('.imagem img.zoom.slide2')

const __imagemTres = __slide.querySelector('.imagem img.fixa.slide3')
const __imagemTresZoom = __slide.querySelector('.imagem img.zoom.slide3')

const __imagemQuatro = __slide.querySelector('.imagem img.fixa.slide4')
const __imagemQuatroZoom = __slide.querySelector('.imagem img.zoom.slide4')

const __imagemCinco = __slide.querySelector('.imagem img.fixa.slide5')
const __imagemCincoZoom = __slide.querySelector('.imagem img.zoom.slide5')

// 1

__imagemUm.onmouseover = function() {
  __imagemUmZoom.classList.add('mostrar')
}

__imagemUm.onmouseout = function() {
  __imagemUmZoom.classList.remove('mostrar')
}

// 2

__imagemDois.onmouseover = function() {
  __imagemDoisZoom.classList.add('mostrar')
}

__imagemDois.onmouseout = function() {
  __imagemDoisZoom.classList.remove('mostrar')
}

// 3

__imagemTres.onmouseover = function() {
  __imagemTresZoom.classList.add('mostrar')
}

__imagemTres.onmouseout = function() {
  __imagemTresZoom.classList.remove('mostrar')
}

// 4

__imagemQuatro.onmouseover = function() {
  __imagemQuatroZoom.classList.add('mostrar')
}

__imagemQuatro.onmouseout = function() {
  __imagemQuatroZoom.classList.remove('mostrar')
}

// 5

__imagemCinco.onmouseover = function() {
  __imagemCincoZoom.classList.add('mostrar')
}

__imagemCinco.onmouseout = function() {
  __imagemCincoZoom.classList.remove('mostrar')
}
