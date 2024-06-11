# Programação de Funcionalidades

Nesta seção são apresentadas as telas desenvolvidas para cada uma das funcionalidades do sistema de acordo com os requisitos funcionais e não funcionais.

# Página de login (RF-001)
A página de Login apresenta a funcionalidade do usuário acessar sua conta.
| Página de Login | 
 ------------------------------------------|
| ![tela](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-pmv-ads-2024-1-e3-proj-fitfocus/assets/89883311/22ca6aab-669c-4952-ad72-11a029da67a4) |

## Requisito atendido:
|ID    | Descrição do Requisito  | Artefatos produzidos |
|------|-----------------------------------------|----------|
|RF-001| O sistema deve permitir que o usuário faça login no aplicativo através de e-mail e senha. | Login.tsx |

## Código Fonte: 

<a href= https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-pmv-ads-2024-1-e3-proj-fitfocus/blob/main/src/src/frontend/components/Login.tsx> Clique aqui </a> para acessar o código da tela de login.

# Página de publicação: usuário autor de contéudo  (RF-002, RF-003 )
A página de publicação permite ao usuário a criação e postagem de conteúdo na aplicação.
| Produção e publicação |
 ------------------------------------------|
| ![texto](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-pmv-ads-2024-1-e3-proj-fitfocus/assets/89883311/f7433f07-1283-41b5-a06a-bc994df21b1e) |

## Requisito atendido:
|ID    | Descrição do Requisito  | Artefatos produzidos |
|------|-----------------------------------------|-----------|
|RF-002| O sistema deve conter uma área de texto para que os usuários autores de textos possam produzir e publicar seus trabalhos. | CreatePost.js <br> CreateRecipe.js |
|RF-003| O sistema deve permitir que o usuário criador de conteúdo possa criar, editar, visualizar e excluir publicações.| CreatePost.js <br> CreateRecipe.js<br> DetailPost.js<br>DetailReceita.js<br>PostDetail.js|

## Código Fonte:

<a href= https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-pmv-ads-2024-1-e3-proj-fitfocus/blob/main/src/src/frontend/components/CreatePost.js> Clique aqui </a> para acessar o código da tela de criação.

<a href= https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-pmv-ads-2024-1-e3-proj-fitfocus/blob/main/src/src/frontend/components/CreateRecipe.js> Clique aqui </a> para acessar o código da tela de criação de receitas.

<a href= https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-pmv-ads-2024-1-e3-proj-fitfocus/blob/main/src/src/frontend/components/DetailPost.js> Clique aqui </a> para acessar o código DetailPost.

<a href= https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-pmv-ads-2024-1-e3-proj-fitfocus/blob/main/src/src/frontend/components/DetailReceita.js> Clique aqui </a> para acessar o código DetailReceita.

<a href= https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-pmv-ads-2024-1-e3-proj-fitfocus/blob/main/src/src/frontend/components/PostDetails.js> Clique aqui </a> para acessar o código PostDetail.

# Página com a calculadora de IMC (RF-004)
A página permite que o usuário faça o cálculo de seu índice de massa corporal.
| IMC  |
 ------------------------------------------| 
 | ![imc](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-pmv-ads-2024-1-e3-proj-fitfocus/assets/89883311/1c3a1503-fe29-4153-9be2-344243e7e1db) |

## Requisito atendido:
|ID    | Descrição do Requisito  | Artefatos produzidos |
|------|-----------------------------------------|------|
|RF-004| O sistema deve conter uma tela que faça o cálculo do IMC (índice de massa corporal) dos usuários.| imc.js |

## Código Fonte

<a href= https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-pmv-ads-2024-1-e3-proj-fitfocus/blob/main/src/src/frontend/components/imc.js> Clique aqui </a> para acessar o código da tela de IMC.

# Página inicial e barra lateral (RF-006)
A página inicial contém uma barra lateral permitindo a visualização das abas da aplicação.
| Barra lateral |
 ------------------------------------------| 
| ![barra](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-pmv-ads-2024-1-e3-proj-fitfocus/assets/89883311/f52f21ce-603a-47db-b6f6-485256eb4b82) |

| Tela Inicial |
 ------------------------------------------- |
![tela inicial](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-pmv-ads-2024-1-e3-proj-fitfocus/assets/89883311/b699c9e1-7762-4511-9f6a-3c2066e0efe2)

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

# Página de Cadastro do Usuário (RF-005)
A página de cadastro do usuário apresenta a funcionalidade do usuário de criar uma conta na aplicação.
| Página de Cadastro | 
 ------------------------------------------|
| ![cadastro](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-pmv-ads-2024-1-e3-proj-fitfocus/assets/89883311/4dfa3fc2-dd21-4a54-a68f-4cd16c20cb6b) |

## Requisito atendido:
|ID    | Descrição do Requisito  | Artefatos produzidos|
|------|-----------------------------------------|------|
|RF-005| 	O sistema deve permitir que o usuário possa cadastrar, alterar e excluir sua conta. | Cadastro.js|

## Código Fonte 

<a href= https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-pmv-ads-2024-1-e3-proj-fitfocus/blob/main/src/src/frontend/components/Cadastro.js>Clique aqui</a> para acessar o código da tela de cadastro.

# Página de Exercícios Físicos (RF-002, RF-003)
A página de exercícios físicos permite ao usuário a criação e postagem de conteúdo relacionados ao tema na aplicação.
| Página de Exercícios | 
 ------------------------------------------|
|  |

## Requisito atendido:
|ID    | Descrição do Requisito  | Artefatos produzidos|
|------|-----------------------------------------|------|
|RF-002| 	O sistema deve conter uma área de texto para que os usuários autores de textos possam produzir e publicar seus trabalhos. | Exercicios.js|
|RF-003| O sistema deve permitir que o usuário criador de conteúdo possa criar, editar, visualizar e excluir publicações.| Exercicios.js|

## Código Fonte 

<a href= https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-pmv-ads-2024-1-e3-proj-fitfocus/blob/main/src/src/frontend/components/Exercicios.js>Clique aqui</a> para acessar o código da tela de exercícios.


