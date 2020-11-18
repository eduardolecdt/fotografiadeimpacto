const __buttonSubir = document.querySelector('section.perguntas .slide img.subir')
const __buttonDescer = document.querySelector('section.perguntas .slide img.descer')
const __divConteudoCinco = document.querySelector('section.perguntas .slide .itens .conteudo')
const numeroLinksCinco = __divConteudoCinco.children.length
let __indiceCinco = 1

__buttonSubir.addEventListener('click', () => {
  const numeroLinksCinco = __divConteudoCinco.children.length

  if (__indiceCinco === numeroLinksCinco) return

  __indiceCinco++

  const porcentagem = 500 * (__indiceCinco - 1)
  __divConteudoCinco.style.transform = `translateY(-${porcentagem}px)`
})

__buttonDescer.addEventListener('click', () => {

  if (__indiceCinco === 1) return

  __indiceCinco--

  const porcentagem = 500 * (__indiceCinco - 1)
  __divConteudoCinco.style.transform = `translateY(-${porcentagem}px)`
})
