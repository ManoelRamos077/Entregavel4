# Projeto de Algoritmos JavaScript

Este repositório contém a implementação de vários algoritmos fundamentais em JavaScript, com foco na prática de Testes Unitários usando Jest.

## Pré-requisitos

Antes de começar, você precisará ter o Node.js e o npm instalados em seu ambiente de desenvolvimento. Isso permitirá que você instale as dependências e execute os testes.

- Node.js
- npm (normalmente instalado com o Node.js)

## Instalação

Primeiro, clone este repositório em sua máquina local usando o seguinte comando:

### Clonando o Repositório

Para obter uma cópia do projeto em sua máquina local, você precisará clonar o repositório. Isso pode ser feito usando o seguinte comando no terminal (ou prompt de comando, se estiver usando o Windows):

```bash
git clone https://exemplo.com/seuprojeto.git


Em seguida, navegue até o diretório do projeto clonado:

cd seuprojeto

Dentro do diretório do projeto, instale as dependências necessárias executando:

npm install --save-dev jest

Este comando irá baixar e instalar o Jest e quaisquer outras dependências listadas no seu arquivo package.json.

Uma vez que seu ambiente de desenvolvimento está configurado, você pode inicializar seu projeto Node.js. Navegue até o diretório do projeto no terminal e execute o seguinte comando:

npm init

## Executando Testes

Este projeto inclui uma série de testes unitários desenvolvidos com Jest para validar a lógica dos algoritmos implementados. Abaixo estão os detalhes sobre cada arquivo de teste e as funções que eles testam:

### `Contagem.test.js`
Testa a função que conta a quantidade de inteiros dentro de um intervalo específico em um array. Verifica se a função conta corretamente os números que estão dentro dos limites definidos e são inteiros.

### `NumPrimo.test.js`
Verifica a função que determina se um número é primo. Este teste garante que a função identifique corretamente números primos e não primos.

### `Fibonacci.test.js`
Testa a função que gera a sequência de Fibonacci. Verifica se a sequência é gerada corretamente para um determinado número de termos.

### `Mdc.test.js`
Testa a função de cálculo do Máximo Divisor Comum (MDC). Este teste confirma se a função calcula corretamente o MDC para pares de números.

### `Ordenacao.test.js`
Verifica o algoritmo de ordenação (por exemplo, Quick Sort). Testa se a função consegue ordenar corretamente uma variedade de arrays, incluindo arrays com números negativos e positivos.

### `Somatorio.test.js`
Testa a função que calcula o somatório dos elementos de um array. Garante que a função some corretamente todos os elementos, independentemente de serem positivos ou negativos.

Para executar esses testes, use o seguinte comando no terminal:

```bash
npm test




