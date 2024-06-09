# Registro de Testes de Software
### Casos de Teste para Registro:

1. **Registro com Sucesso:**
   - **Descrição:** Um usuário se registra com informações válidas.
   - **Passos:**
     1. O usuário acessa a página de registro.
     2. O usuário preenche o formulário com informações válidas (nome, email, senha).
     3. O usuário envia o formulário.
   - **Resultado Esperado:** O usuário é registrado com sucesso no sistema.

2. **Registro com Email Inválido:**
   - **Descrição:** Um usuário tenta se registrar com um email inválido.
   - **Passos:**
     1. O usuário acessa a página de registro.
     2. O usuário preenche o formulário com um email inválido.
     3. O usuário envia o formulário.
   - **Resultado Esperado:** O sistema exibe uma mensagem de erro indicando que o email inserido é inválido.

3. **Registro com Senha Fraca:**
   - **Descrição:** Um usuário tenta se registrar com uma senha fraca.
   - **Passos:**
     1. O usuário acessa a página de registro.
     2. O usuário preenche o formulário com uma senha fraca (por exemplo, menos de 6 caracteres).
     3. O usuário envia o formulário.
   - **Resultado Esperado:** O sistema exibe uma mensagem de erro indicando que a senha inserida é fraca.

4. **Registro com Email Já Existente:**
   - **Descrição:** Um usuário tenta se registrar com um email que já está registrado no sistema.
   - **Preparação:** Um usuário já está registrado com o email que será utilizado no teste.
   - **Passos:**
     1. O usuário acessa a página de registro.
     2. O usuário preenche o formulário com um email já registrado.
     3. O usuário envia o formulário.
   - **Resultado Esperado:** O sistema exibe uma mensagem de erro indicando que o email inserido já está em uso.

### Casos de Teste para Login:

1. **Login com Sucesso:**
   - **Descrição:** Um usuário faz login com informações válidas.
   - **Preparação:** Um usuário está registrado no sistema com email e senha válidos.
   - **Passos:**
     1. O usuário acessa a página de login.
     2. O usuário preenche o formulário com o email e senha corretos.
     3. O usuário envia o formulário.
   - **Resultado Esperado:** O usuário é redirecionado para a página principal/logada do sistema.

2. **Login com Email Inválido:**
   - **Descrição:** Um usuário tenta fazer login com um email inválido.
   - **Passos:**
     1. O usuário acessa a página de login.
     2. O usuário preenche o formulário com um email inválido.
     3. O usuário envia o formulário.
   - **Resultado Esperado:** O sistema exibe uma mensagem de erro indicando que o email inserido é inválido.

3. **Login com Senha Incorreta:**
   - **Descrição:** Um usuário tenta fazer login com uma senha incorreta.
   - **Preparação:** Um usuário está registrado no sistema com um email válido e uma senha conhecida.
   - **Passos:**
     1. O usuário acessa a página de login.
     2. O usuário preenche o formulário com o email válido e uma senha incorreta.
     3. O usuário envia o formulário.
   - **Resultado Esperado:** O sistema exibe uma mensagem de erro indicando que a senha inserida está incorreta.

4. **Login com Email Não Registrado:**
   - **Descrição:** Um usuário tenta fazer login com um email que não está registrado no sistema.
   - **Passos:**
     1. O usuário acessa a página de login.
     2. O usuário preenche o formulário com um email não registrado.
     3. O usuário envia o formulário.
   - **Resultado Esperado:** O sistema exibe uma mensagem de erro indicando que o email inserido não está registrado.
