# 🚩 Movimento por uma Universidade Popular - Universidade de São Paulo 🚩

Repositório do site do MUP-USP.

---

## ⚙️ Como rodar? 

É necessário ter o [Jekyll](https://jekyllrb.com/) instalado, que depende do [Ruby](https://www.ruby-lang.org/pt/). Na página do Jekyll tem um tutorialzinho tranquileba de como fazer a instalação.

Estando com tudo instaladinho, basta acessar a raiz da pasta e rodar no terminal:

    > bundle exec jekyll serve

Isso abrirá um pequeno servidor local, acessível em _http://localhost:4000_, que atualizará automaticamente a cada mudança no código.

Para obter uma versão final, basta rodar

    > bundle exec jekyll build

O site será compilado e o resultado ficará disponível no diretório "_site/". Daí é só usar como bem entender.

## 💻 E no git?

De preferência, use a branch _development_. O GitHub Pages faz esse trabalho de compilar o site automaticamente sempre que alguma mudança é enviada à branch "main", então tome cuidado ao mandar algo para lá.