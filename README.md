# POC Testes _end-to-end_ com Cypress

Repositório que contém os códigos escritos durante o desenvolvimento de uma poc utilizando [`Cypress`]('https://www.cypress.io/') para o Projeto Aplicado do curso de Arquiteto de Software e soluções do IGTI / XP Educação.

# Aplicação Base   
Dado o curto tempo, e para que pudesse focar melhor no desenvolvimento dos testes com a utilização do Cypress, utilizei coomo base para os testes uma aplucação simples de notas, que pode ser visualizada [`aqui`]('https://notes-serverless-app.com/')

# Testes realizados
1. Foi realizado os testes do fluxo de cadastro, utilizando a ferramento [`Mailousaur`]('https://mailosaur.com/') com período te testes.
2. Realizado o teste de login, utlizando armazenamento de sessão para testes posteriores.
3. Relizado o testes de CRUD das notas
4. Relizado o teste de logout

# Rodando os exemplos
Para rodar os exemplos, seguir os seguintes passos:

1. Clonar o Repositório
2. rodar o comando `npm install` na pasta do Projeto
3. após o termino da instalação, há a opção de rodar os testes de 2 formas. `Headless` ou `Via Interface do Cypress`

# Rodando os testes Headless
Para rodas os testes Headless, rodar o comando `npx cypress run`
Esse comando, ao finalizado, gera uma saída com os vídeos das execuções de cada um dos arquivos de testes na pasta `cypress/videos/nome-do-arquivo-de-teste`, onde é possível visualizar o passo a passo da execução dos testes e o resultado.

# Rodando os teste via interface do Cypress
Para rodar os testes via interface do Cypress, rodar o comando `npx cypress open`.
Ao terminar de processar, será aberta uma interface do cypress, com os arquivos de testes escritos. Selecionar um dos arquivos para rodar os casos de testes nele escritos.
Por esse meio, após a execução dos testes, é possivel verificar passo a passo o estado da aplicação, selecionando, no painel lateral esquerdo, a etapa que se deseja visualizar.
