const __buttonAvancar = document.querySelector('section.destacar .slide img.avancar')
const __buttonVoltar = document.querySelector('section.destacar .slide img.voltar')
const __divConteudo = document.querySelector('section.destacar .slide .itens .conteudo')
const numeroLinks = __divConteudo.children.length
let __indice = 1

__buttonAvancar.addEventListener('click', () => {
  const numeroLinks = __divConteudo.children.length

  if (__indice === numeroLinks) return

  __indice++

  const porcentagem = 320 * (__indice - 1)
  __divConteudo.style.transform = `translateX(-${porcentagem}px)`
})

__buttonVoltar.addEventListener('click', () => {

  if (__indice === 1) return

  __indice--

  const porcentagem = 320 * (__indice - 1)
  __divConteudo.style.transform = `translateX(-${porcentagem}px)`
})
