# Plano de Testes de Software

Os testes funcionais a serem realizados na aplicação são descritos a seguir.
 
|    Caso de Teste    |  **CT-01 - Login** |                                                                                         
| :-----------------: | :-----------------------------------------------------------------------------------------------: |
| Requisito Associado | RF-01 - O sistema deve permitir que o usuário faça login no aplicativo através de e-mail e senha. |     
|  Objetivo do teste  |  Verificar se o usuário consegue acessar sua conta com e-mail e senha. |
|       Passos        |  1) Acessar a aplicação móvel <br> 2) Inserir informações para o login <br> 3) Clicar em "Login".|
| Critérios de Êxito  |  O sistema deve permitir que o usuário acesse sua conta. |     

|    Caso de Teste    |  **CT-02 - Criar Conteúdos** |                                                                                         
| :-----------------: | :-----------------------------------------------------------------------------------------------: |
| Requisito Associado | RF-02 - O sistema deve conter uma área de texto para que os usuários autores de textos possam produzir e publicar seus trabalhos. |     
|  Objetivo do teste  |  Verificar se o usuário consegue usar o aplicativo para escrever seus textos e artigos sem dificuldades. | 
|       Passos        | 1) Com o login realizado, o usuário deve clicar no menu <br> 2) Após acessar o menu, clicar em "Área de criação" <br> 3) Clicar em "Adicionar conteúdo" <br> 4) O usuário deve produzir o conteúdo na caixa de texto existente <br> 5) Ao terminar de produzir o conteúdo, o usuário deve clicar em "Publicar".|
| Critérios de Êxito  |  O sistema deve permitir que o usuário escreva o conteúdo e o publique sem dificuldades. |

|    Caso de Teste    |  **CT-03 - Atualizar Conteúdos** |                                                                                         
| :-----------------: | :-----------------------------------------------------------------------------------------------: |
| Requisito Associado | O sistema deve permitir que o usuário criador de conteúdo possa criar, editar, visualizar e excluir publicações. |     
|  Objetivo do teste  |  Verificar se o usuário consegue editar suas publicações produzidas anteriormente. |        
|       Passos        | 1) Com o login realizado, o usuário deve clicar no menu <br> 2) Após acessar o menu, clicar em "Área de criação" <br> 3) O usuário deve escolher o conteúdo que deseja editar em seu histórico de publicações <br> 4) Clicar no ícone de edição <br> 5) Editar o conteúdo desejado <br> 6) Clicar em "Publicar".
| Critérios de Êxito  |  O sistema deve permitir que o usuário atualize suas publicações de forma fácil e descomplicada. |

|    Caso de Teste    |  **CT-04 - Calcular IMC** |                                                                                         
| :-----------------: | :-----------------------------------------------------------------------------------------------: |
| Requisito Associado | RF-04 -	O sistema deve ter um campo IMC para que os usuários que consomem conteúdo possam fazer o cálculo do seu índice de massa corporal com facilidade. |     
|  Objetivo do teste  |  Verificar se o usuário consegue inserir sua altura e peso no aplicativo, a fim de realizar o cálculo do seu índice de massa corporal. |        
|       Passos        |  1) Com o login realizado, o usuário deve clicar no menu <br> 2) Clicar em "Calcule seu IMC" <br> 3)  Preencher os campos de peso, altura, idade e gênero e clicar em "Calcular". |
| Critérios de Êxito  |  O sistema deve realizar o cálculo do IMC do usuário sem apresentar falhas. |

|    Caso de Teste    |  **CT-05 - Cadastro de usuário** |                                                                      
| :-----------------: | :-----------------------------------------------------------------------------------------------: |
| Requisito Associado | RF-05 - O sistema deve possibilitar a criação de perfis de usuários distintos, diferenciando entre os criadores de conteúdo e os consumidores de conteúdo.. |     
|  Objetivo do teste  |  Verificar se o usuário consegue realizar o cadastro de um perfil. |
|       Passos        |  1) Na tela de login, clicar em "Registre-se" <br> 2) Inserir as informações solicitadas para o cadastro <br> 3) Clicar em "Registre-se" para concluir o cadastro.
| Critérios de Êxito  |  O sistema deve permitir que o usuário cadastre seu perfil. |

|    Caso de Teste    |  **CT-06 - Visualização de conteúdos** |                                                                        
| :-----------------: | :-----------------------------------------------------------------------------------------------: |
| Requisito Associado | RF-06 - O sistema deve permitir que os usuários visualizem os conteúdos disponibilizados através de abas presentes no menu principal do aplicativo.|     
|  Objetivo do teste  |  Verificar se o usuário consegue transitar entre as telas para visualizar conteúdos postados por criadores de conteúdo. |
|       Passos        |  1) Com o login realizado, o usuário estará na tela "Home" <br> 2) O usuário deve clicar em alguma publicação existente <br> 3) O usuário deve clicar em "Destaques" na barra inferior da aplicação e selecionar uma publicação <br> 4) O usuário deve clicar no menu principal e clicar em exercícios físicos, e selecionar a publicação desejada.
| Critérios de Êxito  |  O sistema deve permitir que o usuário navegue no aplicativo e visualize os conteúdos publicados. |

|    Caso de Teste    |  **CT-07 - Publicar informações nutricionais** |                                                                        
| :-----------------: | :-----------------------------------------------------------------------------------------------: |
| Requisito Associado | RF-07 - O sistema deve permitir que o usuário criador de conteúdo possa inserir informações nutricionais em uma tabela|     
|  Objetivo do teste  | Verificar se o usuário criador de conteúdo consegue gerar uma tabela com informações nutricionais de alimentos. |
|       Passos        |  1) Com o login realizado, o usuário deve clicar no menu <br> 2) Após acessar o menu, clicar em "Área de criação" <br> 3) Clicar em "Adicionar conteúdo" <br> 4) O usuário deve produzir o conteúdo desejado usando ferramentas de edição de texto que permitem inserir tabelas na publicação <br> 5) Ao terminar de produzir o conteúdo, o usuário deve clicar em "Publicar".|
| Critérios de Êxito  |  O sistema deve permitir que o usuário crie uma tabela com informações nutricionais. |

|    Caso de Teste    |  **CT-08 - Upload de arquivos** |                                                                        
| :-----------------: | :-----------------------------------------------------------------------------------------------: |
| Requisito Associado | RF-08 - O sistema deve permitir que o usuário criador de conteúdo possa fazer upload de fotos para complementar as informações fornecidas.|     
|  Objetivo do teste  | Verificar se o usuário consegue fazer upload de fotos e vídeos no aplicativo. |
|       Passos        |  1) Com o login realizado, o usuário deve clicar no menu <br> 2) Após acessar o menu, clicar em "Área de criação" <br> 3) Clicar em "Adicionar conteúdo" <br> 4) O usuário deve produzir o conteúdo desejado usando ferramentas de edição de texto que permitem inserir tabelas na publicação <br> 5) O usuário deve clicar no ícone "Upload" para carregar o conteúdo complementar desejado <br> 6) Ao terminar de produzir o conteúdo, o usuário deve clicar em "Publicar".
| Critérios de Êxito  |  O sistema deve permitir que o usuário faça upload de conteúdos complementares sem dificuldades. |

|    Caso de Teste    |  **CT-09 - Exclusão de conteúdo** |                                                                        
| :-----------------: | :-----------------------------------------------------------------------------------------------: |
| Requisito Associado | RF-03 - O sistema deve permitir que o usuário criador de conteúdo possa criar, editar, visualizar e excluir publicações.|     
|  Objetivo do teste  | Verificar se o usuário consegue realizar a exclusão de uma publicação. |
|       Passos        |   1) Com o login realizado, o usuário deve clicar no menu <br> 2) Após acessar o menu, clicar em "Área de criação" <br> 3) O usuário deve escolher o conteúdo que deseja excluir em seu histórico dde publicações <br> 4) Clicar no ícone de excluir <br> 5) Exclua o conteúdo desejado.
| Critérios de Êxito  |  O sistema deve permitir que o usuário exclua publicações. |

|    Caso de Teste    |  **CT-10 - Edição de perfil** |                                                                        
| :-----------------: | :-----------------------------------------------------------------------------------------------: |
| Requisito Associado | RF-09 - O sistema deve permitir que o usuário possa cadastrar, alterar e excluir sua conta. |     
|  Objetivo do teste  | Verificar se o usuário consegue editar seu perfil. |
|       Passos        |   1) Com o login realizado, o usuário deve clicar no menu <br> 2) Após acessar o menu, clicar no ícone de perfil <br> 3) Após acessar o perfil, clicar em "Editar perfil" <br> 4) O usuário deve alterar as informações desejadas <br> 5) Clicar em "Confirmar alterações" para realizar a edição de seu perfil.
| Critérios de Êxito  |  O sistema deve permitir que o usuário edite seu perfil. |

|    Caso de Teste    |  **CT-10 - Exclusão de perfil** |                                                                        
| :-----------------: | :-----------------------------------------------------------------------------------------------: |
| Requisito Associado | RF-09 - O sistema deve permitir que o usuário possa cadastrar, alterar e excluir sua conta. |     
|  Objetivo do teste  | Verificar se o usuário consegue excluir seu perfil. |
|       Passos        |   1) Com o login realizado, o usuário deve clicar no menu <br> 2) Após acessar o menu, clicar no ícone de perfil <br> 3) Após acessar o perfil, clicar em "Excluir perfil" <br> 4) Clicar em "Confirmar exclusão do perfil" 
| Critérios de Êxito  |  O sistema deve permitir que o usuário exclua seu perfil. |

|    Caso de Teste    |  **CT-1 - Visualização de perfil** |                                                                        
| :-----------------: | :-----------------------------------------------------------------------------------------------: |
| Requisito Associado | RF-09 - O sistema deve permitir que o usuário possa cadastrar, alterar e excluir sua conta. |     
|  Objetivo do teste  | Verificar se o usuário consegue visualizar seu perfil. |
|       Passos        |   1) Com o login realizado, o usuário deve clicar no menu <br> 2) Após acessar o menu, clicar no ícone de perfil e visualizar as informações 
| Critérios de Êxito  |  O sistema deve permitir que o usuário visualize seu perfil. |
