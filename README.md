# O que estou aprendendo com esse projeto

## Ao Criar um projeto

1. No cainho do usuário e no nome da pasta não devo utilizar caracteres especiais
2. Evitar também espaços em branco.
3. Não criar um projeto dentro de pastas sincronizadas como o Google Drive.

## Estruturas de pastas e arquivos

expo-shared - configurações compartilhadas do expo.
assets - imagens utilizadas na aplicação.
node_modules - todas as bibliotecas instaladas na aplicação.
package.json - guarda as dependências para gerar o node_modules.
app.json - informações da aplicação
tsconfig.js - configuração do typescript na nossa aplicação.
App.tsx - arquivo de inicialização.
babel.config.js - transpilação do javascript

## A vantagem do React Native

<li>Escrevemos a aplicação em uma única base de código (javascript) tanto para iphone e android.

Todo código 'core' vai para um Bundle (pacote). Esse Bundle pode ir tanto para o Ios ou Android. O Bundle contém as interfaces declarativa com JSX que são desenvolvidas de forma independente do ambiente destino.</li>

<li>
No React temos o Refresh e o Reload para programarmos de forma muito mais rápida. Conforme vamos alterando e salvando isso reflete em tempo real na tela.
</li>

<li>Podemos criar e reaproveitar componentes em toda a aplicação</li>

## Dicas

Podemos usar o Fragment '<> </>' para encapsular vários componentes sem ser necessário usar um View. É uma tag sem estilização.

Usar a LogBox a nosso favor para encontrar o erro. Ler com calma e paciência vai poupar tempo. Não devemos nos assustar ao se deparar com um erro.

## Resumo de conteúdos aprendidos

- O que é o Expo
- O que é JSX - Criando interfaces declarativas com o React
- Estilizar elementos com StyleSheet
- Densidade de Pixel
- Organização do projeto
- Componentes do React Native como Text, View, FlatList, SroollView, Alert.
- Hooks: conceito, useState, imutabilidade, State e TextInput, Render, Manipulação de Estados, Estado Assíncrono.
