const __buttonAvancarDois = document.querySelector('section.aulas .slide img.avancar')
const __buttonVoltarDois = document.querySelector('section.aulas .slide img.voltar')
const __divConteudoDois = document.querySelector('section.aulas .slide .itens .conteudo')
const numeroLinksDois = __divConteudoDois.children.length
let __indiceDois = 1

__buttonAvancarDois.addEventListener('click', () => {
  const numeroLinksDois = __divConteudoDois.children.length

  if (__indiceDois === numeroLinksDois) return

  __indiceDois++

  const porcentagem = 704 * (__indiceDois - 1)
  __divConteudoDois.style.transform = `translateX(-${porcentagem}px)`
})

__buttonVoltarDois.addEventListener('click', () => {

  if (__indiceDois === 1) return

  __indiceDois--

  const porcentagem = 704 * (__indiceDois - 1)
  __divConteudoDois.style.transform = `translateX(-${porcentagem}px)`
})
