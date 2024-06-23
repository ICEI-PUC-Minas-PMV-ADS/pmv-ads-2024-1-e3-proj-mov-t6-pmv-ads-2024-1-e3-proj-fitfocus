# Plano de Testes de Software

Os requisitos prévios para a realização dos testes a seguir são:
- Celular IOS ou Android
- Aplicativo instalado
  
### Casos de Teste para Registro:

1. **Registro de Usúario com Sucesso:**
   - **Descrição:** Um usuário se registra com informações válidas e consegue criar uma conta.
   - **Requisitos Associados: RF-01**
   - **Passos:**
     1. O usuário acessa a página de registro.
     2. O usuário preenche o formulário com suas informações.
     3. O usuário envia o formulário.
   - **Critérios de Êxito:**
	O usuário é registrado com sucesso no sistema.
     

### Casos de Teste para Login:

1. **Login com Sucesso:**
   - **Descrição:** Um usuário faz login com informações válidas.
   - **Requisitos Associados: RF-01**
   - **Preparação:** Um usuário está registrado no sistema com email e senha válidos.
   - **Passos:**
     1. O usuário acessa a página de login.
     2. O usuário preenche o formulário com o email e senha corretos.
     3. O usuário envia o formulário.
   - **Critérios de Êxito:** 
	O usuário é redirecionado para a página principal, logado no sistema.

2. **Login com Email Inválido:**
   - **Descrição:** Um usuário tenta fazer login com um email inválido.
   - **Requisitos Associados: RF-01**
   - **Passos:**
     1. O usuário acessa a página de login.
     2. O usuário preenche o formulário com um email inválido.
     3. O usuário envia o formulário.
   - **Critérios de Êxito:** 
	O sistema exibe uma mensagem de erro indicando que o email inserido é inválido.

3. **Login com Senha Incorreta:**
   - **Descrição:** Um usuário tenta fazer login com uma senha incorreta.
   - **Requisitos Associados: RF-01**
   - **Preparação:** Um usuário está registrado no sistema com um email válido e uma senha conhecida.
   - **Passos:**
     1. O usuário acessa a página de login.
     2. O usuário preenche o formulário com o email válido e uma senha incorreta.
     3. O usuário envia o formulário.
   - **Critérios de Êxito:** 
	O sistema exibe uma mensagem de erro indicando que a senha inserida está incorreta.


### Casos de teste para tela de criação (Receita/Post)

1. **Publicar conteúdo com sucesso:**
   - **Descrição:** Um usuário publica o conteúdo desejado sem dificuldades.
   - **Requisitos Associados: RF-02, RF-03**
   - **Passos:**
     1. O usuário acessa a tela de criação.
     2. O usuário escreve seu conteúdo na área de texto.
     3. O usuário envia a publicação.
   - **Critérios de Êxito:** 
	O sistema exibe uma mensagem de sucesso indicando que o conteúdo foi publicado.


2. **Upload de imagem:**
   - **Descrição:** Um usuário seleciona uma imagem para complementar sua publicação.
   - **Requisitos Associados: RF-07**
   - **Passos:**
     1. O usuário acessa a tela de criação.
     2. O usuário clica em "upload".
     3. O usuário adiciona uma imagem.
   - **Critérios de Êxito:** 
	O sistema permite que o usuário faça upload de imagens.


### Casos de testes para tela de IMC

1. **Calcular o IMC com sucesso:**
   - **Descrição:** O usuário fornece as informações solicitadas para o cálculo do IMC .
   - **Requisitos Associados: RF-04**
   - **Passos:**
     1. O usuário acessa a tela de IMC.
     2. O usuário preenche informações como altura, peso, idade e gênero.
     3. O usuário envia o formulário .
   - **Critérios de Êxito:** 
	O sistema realiza corretamente o cálculo do IMC com as informações fornecidas.

2. **Calcular o IMC com unidades de medida diferente:**
   - **Descrição:** O usuário fornece as informações solicitadas para o cálculo do IMC com unidades de medida "in"(altura em polegadas) e "lb"(peso em libra).
   - **Requisitos Associados: RF-04**
   - **Passos:**
     1. O usuário acessa a tela de IMC.
     2. O usuário preenche informações como altura, peso, idade e gênero.
     3. O usuário envia o formulário .
   - **Critérios de Êxito:** 
	O sistema realiza corretamente o cálculo do IMC com as informações fornecidas.

3. Descrição resultado IMC
   - **Descrição:O usuário fornece as informações solicitadas para o cálculo do IMC e abaixo avalia as informaçoes fornecidas pelo sistema.**
   - **Requisitos Associados: RF-04**
   - **Passos:**
     1. O usuário acessa a tela de IMC.
     2. O usuário preenche informações como altura, peso, idade e gênero.
     3. O usuário envia o formulário .
   - **Critérios de Êxito:**
	O sistema realiza corretamente o cálculo do IMC e exibe informações complementares para o usuário.

### Caso de testes para tela de Exercicios

1. **Visualizar lista de exercicios:**
   - **Descrição:** O usuário fornece as alteraçoes para o seu perfil.
   - **Requisitos Associados: RF-08**
   - **Passos:**
     1. O usuario acessa a tela de Exercicios.
     2. O usuario escolhe algum Exercicio a ser feito.
   - **Critérios de Êxito:**
	O sistema altera exibe com sucesso a tela de exercicios.


### Caso de testes para tela de Perfil

1. **Alterar informações do perfil:**
   - **Descrição:** O usuário fornece as alteraçoes para o seu perfil.
   - **Requisitos Associados: RF-05**
   - **Passos:**
     1. O usuario acessa a tela de Perfil.
     2. O usuario altera alguma informação.
     3. O usuario salva as alteraçoes.
   - **Critérios de Êxito:**
O sistema altera com sucesso a informação do usuário.

2. **Excluir informações do perfil:**
   - **Descrição:** O usuário exclui as informações do seu perfil.
   - **Requisitos Associados: RF-05**
   - **Passos:**
     1. O usuario acessa a tela de Perfil.
     2. O usuario exclui alguma informação.
     3. O usuario salva as mudanças.
   - **Critérios de Êxito:**
O sistema exclui com sucesso a informação do usuário.
