<div align="center">
<img width="100px" src="public/favicon.png" />

<br>

# REST Countries API with color theme switcher - Frontend Mentor

![light_mode](https://user-images.githubusercontent.com/70491871/225033183-39282a15-323e-4bf1-ba2c-6fcb3c99aea7.png)

![dark_mode](https://user-images.githubusercontent.com/70491871/225033398-80c10e5a-5a5a-4043-b44d-b964921edffd.png)



</div>

<br>
<div align="center">
<a href="https://countries-rest-api-fm.netlify.app/"><img width="310px" src="https://img.shields.io/badge/DEPLOY-https%3A%2F%2Fcountries--rest--api--fm.netlify.app%2F-00B37E?style=plastic&logo=netlify" /></a>

<br>
<img src="https://img.shields.io/website?down_color=tomato&down_message=offline&label=countries-rest-api&style=plastic&up_&up_message=online&url=https://countries-rest-api-fm.netlify.app/" alt="website badge" />
<img src="https://img.shields.io/github/issues/Diego-Girao/rest-countries-api?color=cyan&style=plastic" alt="issue badge" />
<img src="https://img.shields.io/netlify/ebd5b801-c728-4b5c-aa34-4d6303a758ad?style=plastic" alt="netlify badge" />

</div>
<br>

<br>

Este foi o sexto projeto da mentoria **Conquiste Sua Vaga**, o projeto que escolhi foi inspirado no desafio do Frontend Mentor que era a integração da [REST Countries API](https://restcountries.com/) e exibir alguns dados dos países na tela.

## Sumário

- [Overview](#overview)
  - [O Desafio](#O-Desafio)
  - [Screenshot](#screenshot)
- [Meu processo](#Meu-processo)
  - [Stacks utilizadas](#Stacks-utilizadas)
  - [O que aprendi](#O-que-aprendi)
  - [Desenvolvimento Contínuo](#Desenvolvimento-Contínuo)
- [Author](#author)
- [Agradecimentos](#Agradecimentos)

## Overview

### O Desafio

- O desafio era integrar o Frontend com a API e exibir alguns dados relacionados aos paises na tela principal e tambem o detalhe de cada país individualmente.

- Utilizar a API [REST Countries API](https://restcountries.com/)

- Ver o layout ideal para a interface, dependendo do tamanho da tela do dispositivo

- Deixar o layout o mais próximo possível com o template do Desafio.

<br>

### **Screenshot - Desktop**

<img width="800px" src="src/assets/prints/advice_desktop.png" alt="print da tela da versão desktop" />

<br>

### **Screenshot - Mobile**

<img width="320px" src="src/assets/prints/advice_mobile.png" alt="print da tela da versão mobile" />

<br>

## Meu processo

- Selecionar o projeto a ser realizado

- Após selecionar o projeto e ter alguns problemas com a stack inicial, foram 3 mudanças até a stack que foi utilizada, optei por utilizar _HTML5, Tailwind CSS, Javascript, React, Fetch_, sempre pensando em otimizar o desenvolvimento e aprendizado com a aplicação

- Foram realizados alguns wireframes de como seria toda a estrutura do projeto

- Iniciar o desenvolvimento do código na seguinte ordem, html e por último as funcionalidades javascript/tailwindcss + react + fetch

### Stacks utilizadas

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=Plastic&logo=html5&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/tailwindcss-%231572B6.svg?style=Plastic&logo=tailwindcss&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg??style=plastic&logo=javascript) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=Plastic&logo=react&logoColor=%2361DAFB) ![Git](https://img.shields.io/badge/git-%23F05033.svg?style=Plastic&logo=git&logoColor=white) ![Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=Plastic&logo=netlify&logoColor=#00C7B7)

- [x] HTML5 Semântico
- [x] Tailwind CSS
- [x] JavaScript
- [x] React
- [x] Fetch

### O que aprendi

- Refatorar o código para que ele ficasse menor, mais fácil de enter e optei por utilizar po fetch, evitando assim instalar uma lib para consumo de uma API, para fixar melhor o fetch.

- Aplicar o conceito de que menos é mais e que nem sempre precisamos componentizar tudo, criando apenas 1 componente e 1 page, optei dessa forma pois queria deixar aberto a opção de poder refatorar o código e componentizar o que fosse possível. Assim fixaria mais o processo de refatoração, componentização e controle do git com novas branchs, pull requests e merge.

- Utilizei pela primeira vez para estilo o [Tailwind CSS](https://tailwindcss.com/), gostei muito por conta da liberdade e facilidade para esilizar ali diretamente o que precisa e sem interferir em outros estilos, a aplicação do tema claro/escuro foi interessante pois ele já possui essa fucionalidade integrada então basta usar a className correta, além da facilidade para a responsividade em que pode utilizar a padrão o personalizar como desejar e incluir em seu arquivo padrão de configuração `tailwind.config.js` feito isso basta você utilizar a className com o nome que foi criado, exemplo:

```Javascript
<div className="container grid gap-16 mx-auto desktop:grid-cols-4 tablet:grid-cols-2 tablet:place-items-center mobile:grid-cols-1 mobile:place-items-center"></div>
```

- Uma grande melhoria na gestão desse projeto ao utilizar o método pomodoro

### Desenvolvimento Contínuo

Algumas melhorias já estão mapeadas para próxima release, são as seguintes:

- [ ] Refatorar o código.
- [ ] Melhorar a componentização.
- [ ] Novas Branchs.

## Author - Diego Girão

[![Github](https://img.shields.io/badge/github-%23121011.svg?style=plastic&logo=github&logoColor=white)](https://github.com/diego-girao) [![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=plastic&logo=linkedin&logoColor=white)](https://linkedin.com/in/diego-girao/)

## Agradecimentos

Meu muito obrigado aos mentores **Pedro Marins e Henrique Andrade**, assim como os tutores e meus colegas da turma 23c e da comunidade **Code** no geral, vocês são excelentes e estão sempre dispostos a ajudar, parabéns a todos os envolvidos.
