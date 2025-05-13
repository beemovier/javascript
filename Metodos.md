# Métodos DOM em JavaScript

Este documento reúne os métodos mais usados para manipulação de elementos no DOM:

---

## Seleção de elementos

- **`document.getElementById(id)`**  
  Seleciona um elemento pelo `id`.

- **`document.getElementsByClassName(class)`**  
  Seleciona todos os elementos com a classe (retorna uma **HTMLCollection**).

- **`document.getElementsByTagName(tag)`**  
  Seleciona todos os elementos com a tag (ex: `div`, `p`, etc.).

- **`document.querySelector(selector)`**  
  Retorna o **primeiro** elemento que bate com um seletor CSS.

- **`document.querySelectorAll(selector)`**  
  Retorna **todos** os elementos que batem com um seletor CSS (retorna um **NodeList**).

---

## Modificação de conteúdo e atributos

- **`element.innerText`**  
  Define ou obtém o **texto visível** do elemento.

- **`element.textContent`**  
  Define ou obtém **todo** o texto (inclui texto oculto por CSS).

- **`element.innerHTML`**  
  Define ou obtém o **conteúdo HTML interno** do elemento.

- **`element.setAttribute(attr, value)`**  
  Define um atributo (ex: `href`, `src`).

- **`element.getAttribute(attr)`**  
  Obtém o valor de um atributo.

- **`element.removeAttribute(attr)`**  
  Remove um atributo específico.

---

## Estilo e classes

- **`element.style.property = value`**  
  Define um estilo inline, ex: `element.style.color = 'red'`.

- **`element.classList.add('classe')`**  
  Adiciona uma classe CSS.

- **`element.classList.remove('classe')`**  
  Remove uma classe CSS.

- **`element.classList.toggle('classe')`**  
  Alterna (adiciona/remove) uma classe CSS.

- **`element.classList.contains('classe')`**  
  Verifica se o elemento possui uma classe.

---

## Criação e manipulação de elementos

- **`document.createElement('tag')`**  
  Cria um novo elemento HTML.

- **`parent.appendChild(child)`**  
  Adiciona um elemento filho ao final do elemento pai.

- **`parent.insertBefore(new, existing)`**  
  Insere um elemento antes de um elemento existente.

- **`element.remove()`**  
  Remove o elemento do DOM.

- **`element.replaceWith(newElem)`**  
  Substitui o elemento por outro.

---

## Eventos

- **`element.addEventListener('evento', função)`**  
  Associa uma função a um evento (`click`, `mouseover`, etc.).

- **`element.removeEventListener('evento', função)`**  
  Remove um ouvinte de evento previamente registrado.

- **`event.target`**  
  Refere-se ao elemento que disparou o evento.

---

## Extras úteis

- **`element.children`**  
  Retorna uma **HTMLCollection** com os filhos diretos.

- **`element.parentElement`**  
  Retorna o elemento pai.

- **`element.nextElementSibling`**  
  Retorna o próximo irmão no DOM.

- **`element.previousElementSibling`**  
  Retorna o irmão anterior no DOM.
