# Plano de Testes de Software

Os requisitos para a realização dos testes a seguir são:
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
     1. O usuário é registrado com sucesso no sistema.
     2. O usúario acessa a pagina inicial.
     

2. **Registro com Email Inválido:**
   - **Descrição:** Um usuário tenta se registrar com um email inválido.
   - **Requisitos Associados: RF-01**
   - **Passos:**
     1. O usuário acessa a página de registro.
     2. O usuário preenche o formulário com um email inválido.
     3. O usuário envia o formulário.
   - **Critérios de Êxito:**
     1. O sistema exibe uma mensagem de erro indicando que o email inserido é inválido.

3. **Registro com Email Já Existente:**
   - **Descrição:** Um usuário tenta se registrar com um email que já está registrado no sistema.
   - **Requisitos Associados: RF-01**
   - **Preparação:** Um usuário já está registrado com o email que será utilizado no teste.
   - **Passos:**
     1. O usuário acessa a página de registro.
     2. O usuário preenche o formulário com um email já registrado.
     3. O usuário envia o formulário.
   - **Critérios de Êxito:**
     1. O sistema exibe uma mensagem de erro indicando que o email inserido já está em uso.

### Casos de Teste para Login:

1. **Login com Sucesso:**
   - **Descrição:** Um usuário faz login com informações válidas.
   - **Requisitos Associados: RF-01**
   - **Preparação:** Um usuário está registrado no sistema com email e senha válidos.
   - **Passos:**
     1. O usuário acessa a página de login.
     2. O usuário preenche o formulário com o email e senha corretos.
     3. O usuário envia o formulário.
   - **Critérios de Êxito:** O usuário é redirecionado para a página principal, logado no sistema.

2. **Login com Email Inválido:**
   - **Descrição:** Um usuário tenta fazer login com um email inválido.
   - **Requisitos Associados: RF-01**
   - **Passos:**
     1. O usuário acessa a página de login.
     2. O usuário preenche o formulário com um email inválido.
     3. O usuário envia o formulário.
   - **Critérios de Êxito:** O sistema exibe uma mensagem de erro indicando que o email inserido é inválido.

3. **Login com Senha Incorreta:**
   - **Descrição:** Um usuário tenta fazer login com uma senha incorreta.
   - **Requisitos Associados: RF-01**
   - **Preparação:** Um usuário está registrado no sistema com um email válido e uma senha conhecida.
   - **Passos:**
     1. O usuário acessa a página de login.
     2. O usuário preenche o formulário com o email válido e uma senha incorreta.
     3. O usuário envia o formulário.
   - **Critérios de Êxito:** O sistema exibe uma mensagem de erro indicando que a senha inserida está incorreta.

4. **Login com Email Não Registrado:**
   - **Descrição:** Um usuário tenta fazer login com um email que não está registrado no sistema.
   - **Requisitos Associados: RF-01**
   - **Passos:**
     1. O usuário acessa a página de login.
     2. O usuário preenche o formulário com um email não registrado.
     3. O usuário envia o formulário.
   - **Critérios de Êxito:** O sistema exibe uma mensagem de erro indicando que o email inserido não está registrado.

### Casos de teste para tela de criação (Receita/Post)

1. **Publicar conteúdo com sucesso:**
   - **Descrição:** Um usuário publica o conteúdo desejado sem dificuldades.
   - **Requisitos Associados: RF-02, RF-03**
   - **Passos:**
     1. O usuário acessa a tela de criação.
     2. O usuário escreve seu conteúdo na área de texto.
     3. O usuário envia a publicação.
   - **Critérios de Êxito:** O sistema exibe uma mensagem de sucesso indicando que o conteúdo foi publicado.


2. **Erro ao publicar conteúdo:**
   - **Descrição:** Um usuário tenta publicar o conteúdo sem sucesso.
   - **Requisitos Associados: RF-02, RF-03**
   - **Passos:**
     1. O usuário acessa a tela de criação.
     2. O usuário deixa a área de texto em branco.
     3. O usuário tenta enviar a publicação.
   - **Critérios de Êxito:** O sistema exibe uma mensagem de erro indicando que o conteúdo não foi publicado.

3. **Upload de imagem:**
   - **Descrição:** Um usuário seleciona uma imagem para complementar sua publicação.
   - **Passos:**
     1. O usuário acessa a tela de criação.
     2. O usuário clica em "upload".
     3. O usuário adiciona uma imagem.
   - **Critérios de Êxito:** O sistema permite que o usuário faça upload de imagens.


### Casos de testes para tela de IMC

1. **Calcular o IMC com sucesso:**
   - **Descrição:** O usuário fornece as informações solicitadas para o cálculo do IMC .
   - **Passos:**
     1. O usuário acessa a tela de IMC.
     2. O usuário preenche informações como altura, peso, idade e gênero.
     3. O usuário envia o formulário .
   - **Critérios de Êxito:** O sistema realiza corretamente o cálculo do IMC com as informações fornecidas.

2. **Calcular o IMC com unidades de medida diferente:**
   - **Descrição:** O usuário fornece as informações solicitadas para o cálculo do IMC com unidades de medida "in"(altura em polegadas) e "lb"(peso em libra).
   - **Passos:**
     1. O usuário acessa a tela de IMC.
     2. O usuário preenche informações como altura, peso, idade e gênero.
     3. O usuário envia o formulário .
   - **Critérios de Êxito:** O sistema realiza corretamente o cálculo do IMC com as informações fornecidas.

3. **Calcular o IMC sem sucesso:**
   - **Descrição:** O usuário não fornece as informações solicitadas para o cálculo do IMC .
   - **Passos:**
     1. O usuário acessa a tela de IMC.
     2. O usuário não preenche as informações solicitadas no formulário.
     3. O usuário envia o formulário.
   - **Critérios de Êxito:** O sistema exibe uma mensagem de erro indicando que as informações necessárias não foram fornecidas corretamente.

### Caso de testes para tela de Perfil

1. **Alterar informações do perfil:**
   - **Descrição:** O usuário fornece as alteraçoes para o seu perfil.
   - **Passos:**
     1. O usuario acessa a tela de Perfil.
     2. O usuario altera alguma informação.
     3. O usuario salva as alteraçoes.
   -**Critérios de Êxito:** O sistema altera com sucesso a informação do usuário.

2. **Excluir informações do perfil:**
   - **Descrição:** O usuário exclui as informações do seu perfil.
   - **Passos:**
     1. O usuario acessa a tela de Perfil.
     2. O usuario exclui alguma informação.
     3. O usuario salva as mudanças.
   -**Critérios de Êxito:** O sistema exclui com sucesso a informação do usuário.
