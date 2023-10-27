/**
 * MUP-USP!
 * Movimento por uma Universidade Popular - Universidade de São Paulo
 * https://mup-usp.github.io/
 * 
 * Este eh o javascript que faz funcionar a pagina de edicoes do boletim.
 */

// lista de edicoes
let divs_edicoes = document.querySelectorAll('.boletim_edicao')
let lista_edicoes = [...divs_edicoes]

// Captura os is das edicoes
let ids_edicoes = lista_edicoes.map(edicao => edicao.id)

lista_edicoes.map(div_edicao => {
  div_edicao.onclick = function() {
    document.getElementById(this.id + "_a").click()
  }
})