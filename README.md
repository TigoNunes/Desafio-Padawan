# Desafio-Padawan
 Desafio do Framework Padawans. Este desafio foi realizado durante um concurso para vagas de estagio na empresa [framework](https://frwk.com.br/).
 
 ## Sobre o menu
 - O desafio foi realizado na linguagem *JavaScript*, utilizando um pouco de *html* como base e *CSS* para estilizar. Também foi utilizado da *framework* [Bootstrao](https://getbootstrap.com/) **v5.1.0**.\
 - A intenção foi criar um site simples, com um visual *clean*, mas que atendesse aos requisitos.\
 - Ao acessar o site, o usuário se depara com 3 botões, cada um levando a uma lista diferente:
   1. Primeiro leva a lista de **Postagens**.
   2. Segundo leva a lista de **Albuns**. 
   3. Terceiro leva a lista de **TO-DOs**.
 ## Documentação do código
 - HTML:
    - Foram feitas 4 páginas: index.html, POSTAGENS.html, ALBUMS.html e TODOS.html.
    - A **index.html** possui um *header* com o título Framework. Nesta pagina também está presente uma div com 3 *Hiperlinks*, estes que são usados para levar as outras páginas.
    - A **POSTAGENS.html**, **ALBUMS.html** e a **TODOS.html** são compostas da mesma forma, todas possuem o mesmo *header* que a **index.html**, entretanto, o título Framework serve como um caminho de volta para a página principal. Essas páginas são compostas por uma *table* retirada do [Bootstrao](https://getbootstrap.com/), esta que é atualizada pelo arquivo *JavaScript*.
  - JavaScript:
    - Foram feitos 3 arquivos JS: menuPostagen.js, menuAlbun.js e menuTodos,js.
    - Os 3 arquivos foram compostos igualmente. Todos possuem 4 constantes: **TMDB_ENDPOIN_ENDPOINT** que contém o link base para a API publica em [https://jsonplaceholder.typicode.com/](https://jsonplaceholder.typicode.com/), **albumsPrefix** que contém o prefixo *albums* para acessar os dados de **albuns**, **todosPrefix** que contém o prefixo *todos* para acessar os dados de **todos**, **postsPrefix** que contém o prefixo *posts* para acessar os dados de **posts**.
    - Foi criada uma função que substitui o *html* colocando sempre os dados resgatados da API.    
 
