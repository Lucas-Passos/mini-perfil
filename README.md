Mini Perfil:
  Este é um aplicativo móvel simples, criado como parte de uma avaliação prática para o curso de Desenvolvimento em 
  React Native. O aplicativo simula um fluxo de perfil de usuário, com um formulário de entrada na tela inicial (Home)
  e a exibição das informações (nome e foto) em uma tela de perfil (Perfil).

Como Executar o Projeto:
  Para configurar e rodar o projeto localmente, siga os comandos abaixo. Certifique-se de que você tem o Node.js e o 
  Expo CLI instalados.

1.Criar o projeto:  
   npx create-expo-app mini-perfil --template blank

2.Acessar a pasta do projeto:
  cd mini-perfil

3.Instalar o Expo Router e suas dependências:
  npm expo install expo-router react-native-safe-area-context react-native-screens

4.Habilitar o Expo Router:
  Abra o arquivo package.json na raiz do seu projeto e certifique-se de que a linha "main" esteja configurada como abaixo:
  "main": "expo-router/entry"
  
5.Rodar o aplicativo:
  npx expo start

Após executar o último comando, um servidor de desenvolvimento será iniciado. Você pode escanear o código QR com
o aplicativo Expo Go no seu smartphone ou pressionar a no terminal para rodar o app em um emulador Android,
ou i para um emulador iOS.
