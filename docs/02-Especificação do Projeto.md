# Especificações do Projeto

Para a especificação do projeto, foram determinadas as personas e suas histórias de usuários. Além disso, foram especificados os requisitos funcionais, não funcionais, restrições do projeto e o diagrama de casos de uso.

## Personas

 Persona 1 - Mãe com recursos financeiros limitados 

 ![mae](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-pmv-ads-2024-1-e3-proj-fitfocus/assets/89883311/7c8e9295-b201-4d3c-aac2-439634468fa7)


Persona 2 - Entusiasta de jardinagem

![jardineiro](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-pmv-ads-2024-1-e3-proj-fitfocus/assets/89883311/abaeaa17-0116-4bae-8ff4-137a09d1b603)


Persona 3 -  Iniciante na vida fitness

![atleta iniciante](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-pmv-ads-2024-1-e3-proj-fitfocus/assets/89883311/26e67348-6bec-4f8b-be3d-416a1932dd36)


Persona 4 - Nutricionista

![nutricionista](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-pmv-ads-2024-1-e3-proj-fitfocus/assets/89883311/d2f68f9d-a00a-4701-8cbe-0fb5593f6560)

Persona 5 - Educador Físico

![educador fisico](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-pmv-ads-2024-1-e3-proj-fitfocus/assets/89883311/4f1fc83a-ce2a-4e59-9623-b13ea56bf9b5)

Persona 6 - Idealizador do app fit focus 

![criador fitfocus](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-pmv-ads-2024-1-e3-proj-fitfocus/assets/89883311/e086485c-107a-4f01-bec1-6cdc39b3eb4c)


## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
| Maria  | precisa de acessar dicas sobre alimentação saudável acessíveis | para aprimmorar a saúde dela e de sua filha 
| Eliseu | precisa de informações sobre como cuidar de maneira correta da sua horta | para iniciar seu jardim em casa |
| Rafael | precisa de encontrar exercicios físicos básicos | para melhorar seu condicionamento físico 
| Lais | precisa de uma ferramenta útil e atualizada sobre nutrição | para recomendar a seus pacientes
| André | precisa adicionar múltiplas informações sobre saúde e nutrição | para gerenciar com o eficiência a aplicação Fit Focus
| Felipe | precisa se manter atualizado sobre o valor nutricional dos alimentos | para ajudar seus clientes a alcançar suas metas fitness


## Modelagem do Processo de Negócio 

### Análise da Situação Atual

Com o aumento da procura por informações sobre alimentação, atividades físicas e melhor qualidade de vida, um app para unificar e compartilhar conhecimento confiável acerca do mundo da nutrição se torna necessário. 
O aumento dos preços de alimentos, juntamente com a falta de profundidade na informação fornecida em conteúdos curtos de redes sociais, gera uma descrença e desânimo no usuário que está iniciando essa jornada. Graças a isso, muitos acreditam que não é possível seguir esse caminho, sem aumentar os custos ou realizar sacrifícios de alimentos que já gosta.


### Descrição Geral da Proposta

O app Fit Focus surge para preencher essa lacuna e auxiliar as pessoas que querem entrar nesse mundo, mesmo sem elevar o custo das contas.
Um aplicativo onde o usuário poderá ter várias informações verificadas e já preparadas para facilitar seu aprendizado. Com conceitos diversos, gerados por especialistas em nutrição, atividades físicas e hortifruti. Como também pelos próprios usuários, relatando suas experiências e dicas com base em suas práticas. 
A proposta é ter um ambiente simples e confiável para gerar uma adesão maior a esse estilo de vida, assim como uma troca rica de conhecimentos e informações.


### Processo 1 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 1. Em seguida, apresente o modelo do processo 1, descrito no padrão BPMN. 

![Processo 1](img/02-bpmn-proc1.png)

### Processo 2 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 2. Em seguida, apresente o modelo do processo 2, descrito no padrão BPMN.

![Processo 2](img/02-bpmn-proc2.png)

## Indicadores de Desempenho


|INDICADOR|OBJETIVOS|DESCRIÇÃO|CÁLCULO|FONTE DADOS|PERSPECTIVA|
|-------------|-------------|-------------|-------------|-------------|-------------|
|Satisfação do usuário|Avaliar a satisfação em relação ao uso do app por parte dos usuários|Metrificar o desempenho através da avaliação média dos usuários|-|Loja de aplicativos|Aprimorar o aplicativo|
|Número de downloads|Acompanhar o desempenho em que o aplicativo é baixado|Obter o número de vezes em que o aplicativo foi baixado|-|Loja de aplicativos|Métrica importante para a aplicação|
|Reclamações|Rastrear e corrigir feedbacks negativos com o objetivo de serem cada vez menos frequentes.|Análise de feedback sobre o aplicativo|-|Central de Avaliação|Métrica importante para a aplicação|


## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto. Para determinar a prioridade de requisitos, aplicar uma técnica de priorização de requisitos e detalhar como a técnica foi aplicada.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-01| O sistema deve permitir que o usuário tenha acesso ao aplicativo através de e-mail e senha. | ALTA | 
|RF-02| O sistema deve conter uma área de texto para que os usuários autores de textos possam produzir e publicar seus trabalhos. | ALTA |
|RF-03| O sistema deve permitir que os usuários que fornecem informações possam atualizar suas publicações quando necessário. | MÉDIA |
|RF-04| O sistema deve ter um campo IMC para que os usuários que consomem conteúdo possam fazer o cálculo do seu índice de massa corporal com facilidade. | MÉDIA |
|RF-05| O sistema deve permitir a criação de usuários que criam conteúdo e a criação de usuários que consomem o conteúdo. | ALTA |
|RF-06| O sistema deve permitir que os usuários visualizem os conteúdos disponibilizados através de abas presentes no menu principal do aplicativo. | ALTA |
|RF-07| O sistema deve conter permitir que o usuário criador de conteúdo possa inserir informações nutricionais em uma tabela. | ALTA |
|RF-08| O sistema deve permitir que o usuário criador de conteúdo possa fazer upload de fotos para complementar as informações fornecidas. | BAIXA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-01| O sistema deve ser responsivo para rodar em um dispositivo móvel; | MÉDIA | 
|RNF-02| O sistema deve ser implementado usando a linguagem de programação Javascript e o framework React-Native; |  ALTA | 
|RNF-03| A aplicação deve ser compatível com sistemas operacionais Android e iOS; | ALTA |
|RNF-04| O aplicativo deve se restringir às tecnologias de desenvolvimento mobile. | ALTA |

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| A primeira etapa do projeto referente a análise e especificação do problema deverá ser entregue até o dia 10/03/2024;|
|02| Não pode ser desenvolvido um módulo de backend |

Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)

## Diagrama de Casos de Uso

O diagrama de casos de uso é o próximo passo após a elicitação de requisitos, que utiliza um modelo gráfico e uma tabela com as descrições sucintas dos casos de uso e dos atores. Ele contempla a fronteira do sistema e o detalhamento dos requisitos funcionais com a indicação dos atores, casos de uso e seus relacionamentos. 

As referências abaixo irão auxiliá-lo na geração do artefato “Diagrama de Casos de Uso”.

> **Links Úteis**:
> - [Criando Casos de Uso](https://www.ibm.com/docs/pt-br/elm/6.0?topic=requirements-creating-use-cases)
> - [Como Criar Diagrama de Caso de Uso: Tutorial Passo a Passo](https://gitmind.com/pt/fazer-diagrama-de-caso-uso.html/)
> - [Lucidchart](https://www.lucidchart.com/)
> - [Astah](https://astah.net/)
> - [Diagrams](https://app.diagrams.net/)

# Matriz de Rastreabilidade

A matriz de rastreabilidade é uma ferramenta usada para facilitar a visualização dos relacionamento entre requisitos e outros artefatos ou objetos, permitindo a rastreabilidade entre os requisitos e os objetivos de negócio. 

A matriz deve contemplar todos os elementos relevantes que fazem parte do sistema, conforme a figura meramente ilustrativa apresentada a seguir.

![Exemplo de matriz de rastreabilidade](img/02-matriz-rastreabilidade.png)

> **Links Úteis**:
> - [Artigo Engenharia de Software 13 - Rastreabilidade](https://www.devmedia.com.br/artigo-engenharia-de-software-13-rastreabilidade/12822/)
> - [Verificação da rastreabilidade de requisitos usando a integração do IBM Rational RequisitePro e do IBM ClearQuest Test Manager](https://developer.ibm.com/br/tutorials/requirementstraceabilityverificationusingrrpandcctm/)
> - [IBM Engineering Lifecycle Optimization – Publishing](https://www.ibm.com/br-pt/products/engineering-lifecycle-optimization/publishing/)


# Gerenciamento de Projeto

De acordo com o PMBoK v6 as dez áreas que constituem os pilares para gerenciar projetos, e que caracterizam a multidisciplinaridade envolvida, são: Integração, Escopo, Cronograma (Tempo), Custos, Qualidade, Recursos, Comunicações, Riscos, Aquisições, Partes Interessadas. Para desenvolver projetos um profissional deve se preocupar em gerenciar todas essas dez áreas. Elas se complementam e se relacionam, de tal forma que não se deve apenas examinar uma área de forma estanque. É preciso considerar, por exemplo, que as áreas de Escopo, Cronograma e Custos estão muito relacionadas. Assim, se eu amplio o escopo de um projeto eu posso afetar seu cronograma e seus custos.

## Gerenciamento de Tempo

Definimos o cronograma no gráfico de Gantt a seguir:
<img src=https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-pmv-ads-2024-1-e3-proj-fitfocus/blob/3851333e61a611d0d5b0b27fd7c9bf91c0dd63e1/docs/img/Gantt-atualizado.jpg />

Analise:

<img src=https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t6-pmv-ads-2024-1-e3-proj-fitfocus/blob/3d003f6575f401def7c0eda8b5e31527e07ecb39/docs/img/Analise.jpg />

## Gerenciamento de Equipe

A equipe foi dividida em três setores principais, sendo eles: Planejamento, Interface e Desenvolvimento. Cada setor consta com seus respectivos líderes, tendo o auxílio de toda a equipe em suas atividades.

### **Equipe de planejamento:** 
Definição da preferência do público alvo; Redação dos conteúdos; Testes de usabilidade;

**Líderes:** Lorena Lopes e Ingrid Barros. 

### **Equipe de interface:** 
Definição de layout; Front-end;

**Líderes:** Karina Barbosa, Rafael Gonçalves.

### **Equipe de desenvolvimento:**
Desenvolvimento em Back-end; Implementação;

**Líderes:** Enzo Moura e Samuel Magalhães.


## Gestão de Orçamento

O processo de determinar o orçamento do projeto é uma tarefa que depende, além dos produtos (saídas) dos processos anteriores do gerenciamento de custos, também de produtos oferecidos por outros processos de gerenciamento, como o escopo e o tempo.

![Orçamento](img/02-orcamento.png)
