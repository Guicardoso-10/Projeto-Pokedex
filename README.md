# Pokedex

Este projeto é um site de listagem e busca de pokémons. Nele, o usuário pode acessar dados, como tipo e habilidades, acerca de uma extensa variedade de pokémons. O nome do site é uma referência ao nome do aparelho utilizado pelos personagens no anime quando precisam acessar informações sobre um pokémon.

## Funcionalidades

- Listagem: inicialmente, o site fornece uma lista com 10 pokémons, sempre que desejar, o usuário pode atualizar essa lista com mais 10 pokémons, clicando no botão "Carregar mais"
- Página interna: clicando na imagem de um pokémon, o usuário será direcionado a uma página interna, onde terá acesso aos dados sobre o pokémon clicado; dentre esses dados, estão as habilidades do pokémon, sobre as quais o usuário pode conhecer mais, clicando na seta ao lado do nome da habilidade
- Campo de pesquisa: no cabeçalho da página, do lado esquerdo, está localizada uma barra de pesquisa, onde o usuário pode digitar o nome de qualquer pokémon que desejar e, caso a grafia esteja correta, será direcionado à página de informações sobre o pokémon; é importante lembrar que o nome deve ser escrito todo em minúsculo
- Troca de tema: inicialmente, o site se apresenta com uma cor de fundo branca e letras em tom de vermelho, mas, caso prefira, o usuário tem a opção de trocar esse tema, clicando no botão localizado no cabeçalho da página do lado direito. O nome do botão sempre irá indicar o tema que está ativo no momento de uso.

## Tecnologias e ferramentas utilizadas

- Linguagem HTML
- linguagem CSS
- linguagem Javascript
- React: utilizei o React por ser um framework indicado para single page aplications (aplicações de página única)
- React Router Dom: utilizei essa biblioteca para configurar as rotas das páginas que compôem o site
- Use Context: utilizei essa biblioteca para desenvolver a lógica de mudança de tema do site

## Decisões adotadas durante a realização do projeto

- Durante o planejamento, optei por estilizar as páginas e componentes através de arquivos css e depois refatorar esses estilos para 'styled-components', no entanto, por não ter me adaptado bem a essa forma de estilização, decidi permanacer com os arquivos css e também me certifiquei de deixar as páginas responsivas, criando estilos css específicos para diferentes tamanhos de tela.
- Na maior parte das informações de texto do site, eu apliquei uma fonte correspondente à utilizada no título principal do anime. Fiz isso para que o site tivesse uma maior familiaridade com o anime. Essa fonte só não foi aplicada nas descrições das habilidades, por ser um texto mais longo e detalhado, para que o usuário possa lê-las mais tranquilamente.

## Passo a passo para rodar o projeto

```bash
# clone o repositório:
git clone https://github.com/usuario/nome-do-projeto.git

# navegue até o diretório do projeto
cd pokedex

# instale as depedências

npm install

# inicie o projeto

npm run dev
