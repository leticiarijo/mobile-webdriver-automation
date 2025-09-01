# Mobile Webdriver automation

## Sobre o Projeto
O projeto Mobile Webdriver automation foi desenvolvido para automatizar testes mobile no app WebDriver, incluindo:

Testes de Funcionalidade: Cobertura de testes nas páginas de login, cadastro, formulário, swipe e teste de navegação entre as abas.

## 🚀 Tecnologias Utilizadas

- **[WebDrive](https://webdriver.io/)** - Framework de automação de testes.
- **[Appium](https://appium.io/)** - Servidor de Automação Mobile.
- **[JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)** – Linguagem de programação utilizada na escrita dos testes.
- **[Node.js](https://nodejs.org/)** – Ambiente de execução do JavaScript.
- **Drivers Appium:**
  - `uiautomator2` (para Android)
  - `xcuitest` (para iOS)
- **[Mocha](https://mochajs.org/)** & **[Chai](https://www.chaijs.com/)** – Framework e biblioteca de asserções. 
- **[Allure Framework](https://qameta.io/allure-framework/)** - Reporter para gerar relatórios em HTML, facilitando a análise dos resultados.

## 🔄 Integração Contínua (CI/CD)
Este projeto utiliza GitHub Actions para automação do processo de Integração Contínua. 


## ✅ Pré-requisitos

Antes de começar, garanta que tem as seguintes ferramentas instaladas e configuradas no seu sistema.

### Gerais
- **[Node.js](https://nodejs.org/en/)**- (versão 18 ou superior)
- **[Appium 2.x](https://appium.io/docs/en/2.0/intro/):**
  ```bash
  npm install -g appium
  ```
- **Drivers do Appium:**
  ```bash
  appium driver install uiautomator2
  appium driver install xcuitest
  ```
- **[Appium Doctor](https://github.com/appium/appium-doctor)** para verificar a sua configuração:
  ```bash
  npm install -g @appium/doctor
  ```

### Para Testes Android
- **[Java JDK](https://www.oracle.com/java/technologies/downloads/)** - (versão 11 ou 17)
- **[Android Studio](https://developer.android.com/studio)**
- **Android SDK com as variáveis de ambiente `ANDROID_HOME` e `JAVA_HOME` configuradas.**

### Para Testes iOS (apenas em macOS)
- **[Xcode](https://developer.apple.com/xcode/)**
- **Xcode Command Line Tools:**
  ```bash
  xcode-select --install
  ```

## ⚙️ Configuração do Ambiente

**1 . Clone o repositório:**

git clone [https://github.com/leticiarijo/api-serverest-automation.git](https://github.com/leticiarijo/mobile-webdriver-automation.git)

**2. Instalar as Dependências**
```bash
npm install
```

## **⚡ Execução dos Testes**
Para executar os testes localmente, precisa de 3 terminais abertos ou de executar os dois primeiros passos em background.

**Terminal 1: Iniciar o Servidor Appium**
```bash
npx appium
```
> O servidor ficará ativo e à espera que os testes se conectem a ele.

**Terminal 2: Iniciar o Emulador ou Simulador**
- **Android:** Abra o Android Studio, vá ao "Device Manager" e inicie o emulador desejado.
- **iOS:** Abra o Xcode e inicie o simulador desejado, ou use o comando `open -a Simulator`.

**Terminal 3: Executar os Testes**
- **Para executar os testes de *Android*:**
  ```bash
  npm run test:android
  ```
- **Para executar os testes de *iOS***:
  ```bash
  npm run test:ios
  ```

## 📊 Relatórios de Teste (Allure)

Após a execução dos testes, os resultados serão guardados na pasta `allure-results`. Para visualizar o relatório HTML:

**1. Gerar o Relatório**
```bash
npm run report:generate
```

**2. Abrir o Relatório**
```bash
npm run report:open
```
> Este comando irá abrir o relatório no seu navegador padrão.


## Autor
Criador do projeto: Leticia Rijo
