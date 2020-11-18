(function(){

  // Internal Variables

  const __galeria = document.querySelector('section[name="galeria"]')
  const __querySlide = 'img[name="slide"]'
  const __queryZoom = 'img[name="zoom"]'

  // Methods

  function habilitarMouseOver () {
    __galeria.addEventListener('mouseover', (evento) => {
      if (!evento.target.matches(__querySlide)) return

      const imgZoom = evento.target.parentElement.querySelector('img[name="zoom"]')
      imgZoom.classList.add('mostrar')
    })
  }

  function habilitarMouseOut () {
    __galeria.addEventListener('mouseout', (evento) => {
      if (!evento.target.matches(__queryZoom)) return

      evento.target.classList.remove('mostrar')
    })
  }

  habilitarMouseOver()
  habilitarMouseOut()
}())
