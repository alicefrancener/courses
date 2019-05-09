# HTML5 e CSS3 I: Suas primeiras páginas da Web

Anotações das aulas do curso **HTML5 e CSS3 I: Suas primeiras páginas da Web**

## Aulas

- [Introdução ao HTML](#aula-1-introdução-ao-html)
- [Introdução a CSS](#aula-2-introdução-a-css)
- [Aprofundando no HTML](#aula-3-aprofundando-no-html)

## Aula 1: Introdução ao HTML

## Aula 2: Introdução a CSS

## Aula 3: Aprofundando no HTML

### Links

Tag `<a>` é usada para dizer para onde esse link levará nosso visitante quando clicado, e o atributo `href` dessa tag:

```html
<p>... grandes empresas como <a href="http://www.bmw.com/">BMW</a>
```

Se o link não for passado completo (http://...), como abaixo, o navegador irá trocar só o final dele e vai para (http://meusite.com/blog.html). Esse é um **link relativo** (relativo ao endereço que você está visitando no momento). O link acima é um **link absoluto**.

```html
<p> ...mantenho um <a href="blog.html">blog</a></p>
```

### Imagens

Tag com o atributo `<img src="eu.jpg">`  
Para oferecer uma descrição da imagem e torná-la mais **acessível**, usa-se `<img src="eu.jpg" alt="Foto do João da Silva">`

### Citações

Tag para citações `<blockquote>` e para o autor da citação `<cite>`

```html
<blockquote>
    <p>"Bla, bla bla"</p>
    <cite>Fulano, 2015</cite>
</blockquote>
```
### HTML e semântica

O conteúdo deve ser bem descrito para que leitores de tela e buscadores consigam processar melhor o conteúdo.

Para deixar o código **HTML semântico** devemos usar tags mais adequadas para cada tipo de conteúdo.

> **Semâtica = + acessibilidade, + usabilidade**

Algumas tags não modificam o conteúdo exibido, porém agregam semântica ao conteúdo. Por exemplo, a tag `<div>` cria uma divisão, semelhante visualmente a tag `<nav>`, porém essa tag indica regiões da página que contém links de navegação pelo site.

Exemplo de outras tag com marcação mais semântica:

- `<main>`: conteúdo principal da página
- `<header>`: cabeçalho da página ou de uma região dela
- `<footer>`: mesma ideia da tag <header> para o rodapé
- `<aside>`: conteúdo auxiliar ao conteúdo principal, como links relacionados ao conteúdo
- `<article>`: conteúdo que, por si só, já tem um sentido completo, como um post de um blog ou uma notícia
- `<section>`: parte/seção de uma página ou texto