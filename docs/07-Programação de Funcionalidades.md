# Programação de Funcionalidades

Nesta seção são apresentadas as telas desenvolvidas para cada uma das funcionalidades do sistema de acordo com os requisitos funcionais e não funcionais.

# Página de Cadastro do Usuário 
A página de cadastro do usuário apresenta a funcionalidade do usuário de criar uma conta na aplicação.

![cadastro-usuario](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-pmv-ads-2024-1-e3-proj-fitfocus/assets/126575698/f915abcc-f062-484a-8d14-2c64dae4fc9c)

## Requisito atendido:
|ID    | Descrição do Requisito  | Artefatos produzidos|
|------|-----------------------------------------|------|
|RF-005| 	O sistema deve permitir que o usuário possa cadastrar, alterar e excluir sua conta. | Cadastro.js|

## Código Fonte 

<a href= https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-pmv-ads-2024-1-e3-proj-fitfocus/blob/main/src/src/frontend/components/Cadastro.js>Clique aqui</a> para acessar o código da tela de cadastro.

# Página de login 
A página de Login apresenta a funcionalidade do usuário acessar sua conta.

![login](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-pmv-ads-2024-1-e3-proj-fitfocus/assets/126575698/a435adcd-d754-4cfa-abcb-2bedc28afd5b)

## Requisito atendido:
|ID    | Descrição do Requisito  | Artefatos produzidos |
|------|-----------------------------------------|----------|
|RF-001| O sistema deve permitir que o usuário faça login no aplicativo através de e-mail e senha. | Login.tsx |

## Código Fonte: 

<a href= https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-pmv-ads-2024-1-e3-proj-fitfocus/blob/main/src/src/frontend/components/Login.tsx> Clique aqui </a> para acessar o código da tela de login.

# Página inicial e Menu Principal 
A página inicial contém um menu principal que permite a visualização das abas da aplicação.

![pagina-inicial](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-pmv-ads-2024-1-e3-proj-fitfocus/assets/126575698/5d191318-e76e-4761-b6f4-03efb956d289)

## Requisito atendido:
|ID    | Descrição do Requisito  | Artefatos produzidos |
|------|-----------------------------------------|-------|
|RF-006 |  O sistema deve permitir que os usuários visualizem os conteúdos disponibilizados através de abas presentes no menu principal do aplicativo| Home.js<br>Barra-lateral.js<br>footer.js<br>ListPost.js<br>ListRecipe.js<index.js>|

## Código Fonte

<a href= https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-pmv-ads-2024-1-e3-proj-fitfocus/blob/main/src/src/frontend/components/Home.js> Clique aqui</a> para acessar o código da tela de início.

<a href= https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-pmv-ads-2024-1-e3-proj-fitfocus/blob/main/src/src/frontend/components/Barra-lateral.js> Clique aqui</a> para acessar o código da barra lateral.

<a href= https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-pmv-ads-2024-1-e3-proj-fitfocus/blob/main/src/src/frontend/components/footer.js> Clique aqui</a> para acessar o código do footer.

<a href= https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-pmv-ads-2024-1-e3-proj-fitfocus/blob/main/src/src/frontend/components/ListPost.js> Clique aqui</a> para acessar o código ListPost.js.

<a href= https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-pmv-ads-2024-1-e3-proj-fitfocus/blob/main/src/src/frontend/components/ListRecipe.js> Clique aqui</a> para acessar o código ListRecipe.js.

# Página de Criação de Receitas e Página de Criação de Conteúdos 
A página de publicação permite ao usuário a criação e postagem de conteúdo na aplicação.

![criar-receita](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-pmv-ads-2024-1-e3-proj-fitfocus/assets/126575698/354f73fe-ded1-46f6-93c4-16f43bcf2778)

![criar-post](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-pmv-ads-2024-1-e3-proj-fitfocus/assets/126575698/54aa2d19-04f6-44b2-b548-850dfb39cdc7)

## Requisito atendido:
|ID    | Descrição do Requisito  | Artefatos produzidos |
|------|-----------------------------------------|-----------|
|RF-002| O sistema deve conter uma área de texto para que os usuários autores de textos possam produzir e publicar seus trabalhos. | CreatePost.js <br> CreateRecipe.js |
|RF-003| O sistema deve permitir que o usuário criador de conteúdo possa criar, editar, visualizar e excluir publicações.| CreatePost.js <br> CreateRecipe.js<br> DetailPost.js<br>DetailReceita.js<br>PostDetail.js|
|RF-007| O sistema deve permitir que o usuário criador de conteúdo possa fazer upload de fotos para complementar as informações fornecidas.|CreatePost.js <br> CreateRecipe.js|

## Código Fonte:

<a href= https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-pmv-ads-2024-1-e3-proj-fitfocus/blob/main/src/src/frontend/components/CreatePost.js> Clique aqui </a> para acessar o código da tela de criação.

<a href= https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-pmv-ads-2024-1-e3-proj-fitfocus/blob/main/src/src/frontend/components/CreateRecipe.js> Clique aqui </a> para acessar o código da tela de criação de receitas.

<a href= https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-pmv-ads-2024-1-e3-proj-fitfocus/blob/main/src/src/frontend/components/DetailPost.js> Clique aqui </a> para acessar o código DetailPost.

<a href= https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-pmv-ads-2024-1-e3-proj-fitfocus/blob/main/src/src/frontend/components/DetailReceita.js> Clique aqui </a> para acessar o código DetailReceita.

<a href= https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-pmv-ads-2024-1-e3-proj-fitfocus/blob/main/src/src/frontend/components/PostDetails.js> Clique aqui </a> para acessar o código PostDetail.

# Página com a calculadora de IMC 
A página permite que o usuário faça o cálculo de seu índice de massa corporal.

![imc](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-pmv-ads-2024-1-e3-proj-fitfocus/assets/126575698/fa4d1d7c-2dd1-4f2c-9941-2cad2477ef6e)

## Requisito atendido:
|ID    | Descrição do Requisito  | Artefatos produzidos |
|------|-----------------------------------------|------|
|RF-004| O sistema deve conter uma tela que faça o cálculo do IMC (índice de massa corporal) dos usuários.| imc.js |

## Código Fonte

<a href= https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-pmv-ads-2024-1-e3-proj-fitfocus/blob/main/src/src/frontend/components/imc.js> Clique aqui </a> para acessar o código da tela de IMC.

# Página de Exercícios Físicos 
A página de exercícios físicos permite ao usuário a visualização de uma lista de exercícios físicos.

![exercicios](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-pmv-ads-2024-1-e3-proj-fitfocus/assets/126575698/6bf2be91-d361-4a7e-b1c8-3e097b4af38b)

## Requisito atendido:
|ID    | Descrição do Requisito  | Artefatos produzidos|
|------|-----------------------------------------|------|
|RF-008| 	O sistema deve permitir que o usuário possa ver uma lista de exercícios fisicos benéficos para a saúde.| Exercicios.js|

## Código Fonte 

<a href= https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-pmv-ads-2024-1-e3-proj-fitfocus/blob/main/src/src/frontend/components/Exercicios.js>Clique aqui</a> para acessar o código da tela de exercícios.

# Página de Lista de Receitas e Posts
A página de Receitas e Posts permite ao usuário a visualização de uma lista de receitas e posts.

![lista-receitas](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-pmv-ads-2024-1-e3-proj-fitfocus/assets/126575698/b7c24f75-0199-44c6-bb30-afa67cc5f5c4)

![lista-posts](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-pmv-ads-2024-1-e3-proj-fitfocus/assets/126575698/057830b3-173c-46b4-be7e-6273321464a1)

## Requisito atendido:
|ID    | Descrição do Requisito  | Artefatos produzidos|
|------|-----------------------------------------|------|
|RF-008| O sistema deve permitir que os usuários visualizem os conteúdos disponibilizados através de abas presentes no menu principal do aplicativo.| DetailPost.js<br>DetailReceita.js|

## Código Fonte 

<a href= https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-pmv-ads-2024-1-e3-proj-fitfocus/blob/main/src/src/frontend/components/DetailPost.js> Clique aqui </a> para acessar o código DetailPost.

<a href= https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-pmv-ads-2024-1-e3-proj-fitfocus/blob/main/src/src/frontend/components/DetailReceita.js> Clique aqui </a> para acessar o código DetailReceita.




