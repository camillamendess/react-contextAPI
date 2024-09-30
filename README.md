
# E-commerce em React com Context API

Meteora é um e-commerce fictício de moda, projetado pela Alura. Inicialmente, o projeto apresentava o problema de prop drilling, e a Context API foi implementada como solução para o gerenciamento de estados globais em uma aplicação React. 

## O que é Prop Drilling?
Prop drilling ocorre quando você precisa passar dados por várias camadas de componentes, de pai para filho, até que o componente que realmente precisa desses dados o receba. Isso pode tornar o código difícil de manter e de escalar, pois quanto maior a aplicação, mais complexa se torna essa cadeia de "perfuração" de props.

No caso do e-commerce, um exemplo clássico seria o carrinho de compras, onde as informações sobre os itens selecionados precisariam ser passadas de um componente mais alto na hierarquia (como App.js) até os componentes que exibem os detalhes do carrinho.

## Solução com Context API
A Context API do React foi implementada para eliminar a necessidade de passar props por diversos componentes. O contexto permite que você compartilhe valores entre componentes sem a necessidade de passar props manualmente por todos os níveis.

`createContext`: O createContext é utilizado para criar um contexto, que permite compartilhar informações entre componentes sem precisar passar props por cada nível da árvore de componentes. No contexto do carrinho de compras, o createContext cria um espaço onde os dados do carrinho são armazenados e podem ser acessados por qualquer componente que precise deles.

`useContext`: O useContext é um hook que permite acessar o contexto diretamente dentro de um componente, simplificando o acesso aos dados globais fornecidos pelo Provider. Com o useContext, não precisamos mais usar o Consumer manualmente para obter valores do contexto.

## Como a Context API Resolve o Problema?
Usando o React Context API, foi criado um CarrinhoContext para armazenar as informações do carrinho de compras. Qualquer componente que precise acessar ou modificar esses dados pode fazer isso diretamente, sem depender da passagem de props.
