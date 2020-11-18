const __buttonAvancarQuatro = document.querySelector('section.galeria .slide img.avancar')
const __buttonVoltarQuatro = document.querySelector('section.galeria .slide img.voltar')
const __divConteudoQuatro = document.querySelector('section.galeria .slide .itens .conteudo')
const numeroLinksQuatro = __divConteudoQuatro.children.length
let __indiceQuatro = 1

__buttonAvancarQuatro.addEventListener('click', () => {
  const numeroLinksQuatro = __divConteudoQuatro.children.length

  if (__indiceQuatro === numeroLinksQuatro) return

  __indiceQuatro++

  const porcentagem = 384 * (__indiceQuatro - 1)
  __divConteudoQuatro.style.transform = `translateX(-${porcentagem}px)`
})

__buttonVoltarQuatro.addEventListener('click', () => {

  if (__indiceQuatro === 1) return

  __indiceQuatro--

  const porcentagem = 384 * (__indiceQuatro - 1)
  __divConteudoQuatro.style.transform = `translateX(-${porcentagem}px)`
})
