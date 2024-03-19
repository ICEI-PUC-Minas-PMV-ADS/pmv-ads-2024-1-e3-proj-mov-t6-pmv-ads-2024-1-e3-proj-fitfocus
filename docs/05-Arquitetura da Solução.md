# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>

Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

![Arquitetura da Solução](img/02-mob-arch.png)

## Diagrama de Classes

O diagrama de classes ilustra graficamente como será a estrutura do software, e como cada uma das classes da sua estrutura estarão interligadas. Essas classes servem de modelo para materializar os objetos que executarão na memória.

As referências abaixo irão auxiliá-lo na geração do artefato “Diagrama de Classes”.

> - [Diagramas de Classes - Documentação da IBM](https://www.ibm.com/docs/pt-br/rational-soft-arch/9.6.1?topic=diagrams-class)
> - [O que é um diagrama de classe UML? | Lucidchart](https://www.lucidchart.com/pages/pt/o-que-e-diagrama-de-classe-uml)

## Modelo ER

O Modelo ER representa através de um diagrama como as entidades (coisas, objetos) se relacionam entre si na aplicação interativa.]

As referências abaixo irão auxiliá-lo na geração do artefato “Modelo ER”.

> - [Como fazer um diagrama entidade relacionamento | Lucidchart](https://www.lucidchart.com/pages/pt/como-fazer-um-diagrama-entidade-relacionamento)

## Esquema Relacional

O Esquema Relacional corresponde à representação dos dados em tabelas juntamente com as restrições de integridade e chave primária.
 
As referências abaixo irão auxiliá-lo na geração do artefato “Esquema Relacional”.

> - [Criando um modelo relacional - Documentação da IBM](https://www.ibm.com/docs/pt-br/cognos-analytics/10.2.2?topic=designer-creating-relational-model)

## Modelo Físico

Entregar um arquivo banco.sql contendo os scripts de criação das tabelas do banco de dados. Este arquivo deverá ser incluído dentro da pasta src\bd.

## Tecnologias Utilizadas

Descreva aqui qual(is) tecnologias você vai usar para resolver o seu problema, ou seja, implementar a sua solução. Liste todas as tecnologias envolvidas, linguagens a serem utilizadas, serviços web, frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas.

Apresente também uma figura explicando como as tecnologias estão relacionadas ou como uma interação do usuário com o sistema vai ser conduzida, por onde ela passa até retornar uma resposta ao usuário.

## Hospedagem

Explique como a hospedagem e o lançamento da plataforma foi feita.

> **Links Úteis**:
>
> - [Website com GitHub Pages](https://pages.github.com/)
> - [Programação colaborativa com Repl.it](https://repl.it/)
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Publicando Seu Site No Heroku](http://pythonclub.com.br/publicando-seu-hello-world-no-heroku.html)

## Qualidade de Software

A norma internacional ISO/IEC 25010, que é uma atualização da ISO/IEC 9126, define oito características e trinta subcaracterísticas de qualidade para produtos de software. A seguir, é apresentada uma tabela com as características e subcaracterísticas importantes para o desenvolvimento de um aplicativo que visa fornecer fácil acesso à informações nutricionais de qualidade:

| Característica | Subcaracterística | Justificativa |
|----------------|-------------------|---------------|
| Usabilidade    | Inteligibilidade<br> Apreensibilidade <br> Operacionalidade | Facilidade com que o usuário pode compreender as funcionalidades  do sistema e avaliar se o mesmo pode ser usado para satisfazer as suas necessidades. <br> Identifica a facilidade de aprendizado do sistema para os seus potenciais usuários. <br>O sistema possui atributos que facilitam seu uso e controle.<br>|
| Segurança | confidencialidade | O sistema é capaz de garantir que dados são acessados apenas por aqueles que têm acesso autorizado. |
| Manutenibilidade | Modularidade <br> Modificabilidade<br> testabilidade<br>|  Mecanismo que permite que um sistema de software seja dividido em partes que interagem entre si.<br>Capacidade de um produto ou sistema ser modificado sem introduzir defeitos ou diminuir a qualidade atual.<br>Efetividade de testes para o sistema.|
| Portabilidade | Facilidade de instalação |  Capacidade de um produto ou sistema ser instalado ou desinstalado facilmente.|
| Eficiência | Comportamento em relação ao tempo. | Tempo de resposta e processamento. |

A partir das características e subcaracterísticas apresentadas, é possível estabelecer métricas de avaliação do produto, que são utilizadas para caracterizar e ter melhor entendimento de todo o processo por trás do produto desenvolvido:

| Subcaracterísticas | Métricas | Escala | Peso |
|--------------------------|-------------|-----------|--------|
| Inteligibilidade | É fácil compreender o sistema? | 1. Atende completamente <br> 2. Atende parcialmente <br> 3. Não atende |ALTO|
| Apreensibilidade | É fácil aprender a usar? | 1. Atende completamente <br> 2. Atende parcialmente <br> 3. Não atende |ALTO|
| Operacionalidade | É fácil fazer operações no sistema? | 1. Atende completamente <br> 2. Atende parcialmente <br> 3. Não atende |ALTO|
| Confidencialidade | O sistema possui validação de acesso? | 1. Sim<br> 2. Não | ALTO |
| Modularidade | Há interação entre os módulos do sistema? | 1. Sim <br> 2. Não |ALTO|
| Modificabilidade | É viável implementar modificações? | 1. Sim <br> 2. Não |ALTO|
| Testabilidade | Os testes de software e de usabilidade são de fácil elaboração e entendimento? | 1. Fácil<br> 2. Médio<br> 3. Difícil<br> |ALTO|
| Facilidade de instalação | É fácil instalar e desinstalar o aplicativo de um aparelho móvel? | 1. Fácil<br> 2. Médio<br> 3. Difícil<br> |ALTO|
| Modificabilidade | É viável implementar modificações? |  1. Sim<br> 2. Não | ALTO |
| Testabilidade | Os testes de software e de usabilidade são de fácil elaboração e entendimento? | 1. Fácil<br> 2. Médio<br> 3. Difícil<br> |ALTO|
| Facilidade de instalação | É fácil instalar e desinstalar o aplicativo de um aparelho móvel? | 1. Fácil<br> 2. Médio<br> 3. Difícil<br> |ALTO|
| Comportamento em relação ao tempo | O tempo de resposta e de processamento é satisfatório?| 1. Satisfatório<br> 2. Insatisfatório | ALTO | 

