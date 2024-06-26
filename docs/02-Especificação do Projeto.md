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
| Maria  | Quero acessar minha conta atraves de e-mail e senha | para visualizar posts sobre alimentação e exercicios fisicos. | 
| Felipe | Quero escrever meus posts de forma prática | para disponibilizar informações sobre exercícios físicos. |
| Lais | Quero criar, editar ou excluir minhas publicações | a fim de compartilhar informações sobre nutrição. |
| Rafael | Quero usar o aplicativo para fazer o cálculo do meu IMC | para saber se estou dentro do índice esperado. |
| André | Quero cadastrar, editar, visualizar ou excluir meu perfil | para ter controle sobre minha conta no app. |
| Eliseu | Quero navegar no app através de abas | a fim de visualizar conteúdos. |
| Lais | Quero usar ferramentas de edição de texto | para publicar tabelas com informações nutricionais. |
| André | Quero fazer upload de imagens | para complementar meu conteúdo. |


## Modelagem do Processo de Negócio 

### Análise da Situação Atual

Com o aumento da procura por informações sobre alimentação, atividades físicas e melhor qualidade de vida, um app para unificar e compartilhar conhecimento confiável acerca do mundo da nutrição se torna necessário. 
O aumento dos preços de alimentos, juntamente com a falta de profundidade na informação fornecida em conteúdos curtos de redes sociais, gera uma descrença e desânimo no usuário que está iniciando essa jornada. Graças a isso, muitos acreditam que não é possível seguir esse caminho, sem aumentar os custos ou realizar sacrifícios de alimentos que já gosta.


### Descrição Geral da Proposta

O app Fit Focus surge para preencher essa lacuna e auxiliar as pessoas que querem entrar nesse mundo, mesmo sem elevar o custo das contas.
Um aplicativo onde o usuário poderá ter várias informações verificadas e já preparadas para facilitar seu aprendizado. Com conceitos diversos, gerados por especialistas em nutrição, atividades físicas e hortifruti. Como também pelos próprios usuários, relatando suas experiências e dicas com base em suas práticas. 
A proposta é ter um ambiente simples e confiável para gerar uma adesão maior a esse estilo de vida, assim como uma troca rica de conhecimentos e informações.


### Processo

![Processo](img/download.jpg)

## Indicadores de Desempenho


|INDICADOR|OBJETIVOS|DESCRIÇÃO|CÁLCULO|FONTE DADOS|PERSPECTIVA|
|-------------|-------------|-------------|-------------|-------------|-------------|
|Satisfação do usuário|Avaliar a satisfação em relação ao uso do app por parte dos usuários|Metrificar o desempenho através da avaliação média dos usuários|Media de Avaliação dos usuarios|Loja de aplicativos|Aprimorar o aplicativo|
|Número de downloads|Acompanhar o desempenho em que o aplicativo é baixado|Obter o número de vezes em que o aplicativo foi baixado|Quantidade de Downloads|Loja de aplicativos|Métrica importante para a aplicação|
|IMC|Veficar se o calculo esta sendo feito corretamente|Acompanhar o uso da ferramenta.|(Peso/Altura)²|Fornecidos no cadastro do usuario|Melhorar e criar mais adesão a ferramenta|
|Receitas|Conferir a veracidade e uso das receitas do aplicativo|Rastrear o uso da ferramenta.|Quantidade de leitura e salvamento de X receita|Banco de dados|Melhorar e criar mais adesão a ferramenta|


## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto. Para determinar a prioridade de requisitos, aplicar uma técnica de priorização de requisitos e detalhar como a técnica foi aplicada.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-01| O sistema deve permitir que o usuário faça login no aplicativo através de e-mail e senha. | ALTA | 
|RF-02| O sistema deve conter uma área de texto para que os usuários criadores de conteúdo possam publicar seus trabalhos. | ALTA |
|RF-03| O sistema deve permitir que o usuário criador de conteúdo possa criar, editar, visualizar e excluir publicações. | MÉDIA |
|RF-04| O sistema deve conter uma tela que faça o cálculo do IMC (índice de massa corporal) dos usuários. | MÉDIA |
|RF-05| O sistema deve permitir que o usuário possa cadastrar, alterar e excluir sua conta. | ALTA |
|RF-06| O sistema deve permitir que os usuários visualizem os conteúdos disponibilizados através de abas presentes no menu principal do aplicativo. | ALTA |
|RF-07| O sistema deve permitir que o usuário criador de conteúdo possa fazer upload de fotos para complementar as informações fornecidas. | BAIXA |
|RF-08| O sistema deve permitir que o usuário possa ver uma lista de exercícios fisicos benéficos para a saúde. | MÉDIA |



### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-01| O sistema deve ser responsivo para rodar em um dispositivo móvel; | MÉDIA | 
|RNF-02| O sistema deve ser implementado usando a linguagem de programação Javascript e o framework React-Native; |  ALTA | 
|RNF-03| A aplicação deve ser compatível com sistemas operacionais Android e iOS; | ALTA |
|RNF-04| O aplicativo deve se restringir às tecnologias de desenvolvimento mobile. | ALTA |

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto completo deverá ser entregue até o dia 31/06/2024;|
|02| A equipe não pode subcontratar o desenvolvimento do trabalho.|
|03| A aplicação deve responder em um tempo de até 5s as suas requisições.|

## Diagrama de Casos de Uso

![Processo 1](img/CasoDeUso.png)

# Matriz de Rastreabilidade

A matriz de rastreabilidade é uma ferramenta usada para facilitar a visualização dos relacionamento entre requisitos e outros artefatos ou objetos, permitindo a rastreabilidade entre os requisitos e os objetivos de negócio. 

A matriz deve contemplar todos os elementos relevantes que fazem parte do sistema, conforme a figura meramente ilustrativa apresentada a seguir.

|   | RF-01 | RF-02 | RF-03 | RF-04 | RF-05 | RF-06 | RF-07 | RF-08 | RNF-01 | RNF-02 | RNF-03 | RNF-04 |||||||| | 
|---|-----|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|-----|-----|---|
|RF-01|   |   |   |   | x |   |   |   |   |   |   |   |   |   |   |   |   |     |    |
|RF-02|   |   | x | x | x | x | x |   |   |   |   |   |   |   |   |   |   |     |    |
|RF-03|   |   |   |   | x |   | x | x |   |   |   |   |   |   |   |   |   |     |    |
|RF-04|   |   |   |   | x | x |   |   |   |   |   |   |   |   |   |   |   |     |    |
|RF-05| x | x |   | x |   |   | x |   |   |   |   |   |   |   |   |   |   |     |    |
|RF-06|   | x |   | x | x |   |   |   |   |   |   |   |   |   |   |   |   |     |    |
|RF-07|   | x | x |   | x |   |   | x |   |   |   |   |   |   |   |   |   |     |    |
|RF-08|   |   | x |   | x |   |   |   |   |   |   |   |   |   |   |   |   |     |    |
|RNF-01|  |   |   |   |   |   |   |   |   |   |   |   | x |   |   |   |   |     |    |
|RNF-02|  |   |   |   |   |   |   |   |   |   |   | x | x |   |   |   |   |     |    |
|RNF-03|  |   |   |   |   |   |   |   |   | x |   |   | x |   |   |   |   |     |    |
|RNF-04|  |   |   |   |   |   |   |   |   | x | x | x |   |   |   |   |   |     |    |
 
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

Determinamos o orçamento do projeto baseado nos requisitos necessários para a criação e manutenção do aplicativo. Esse cronograma pode ser alterado ao longo do projeto com base no tempo e recursos utilizados. 

| Recursos Necessários  | Custo estimado (R$) |
| ------------- | ------------- |
| Mão de obra (desenvolvimento e manutenção)	| R$ 65.000,00 |
| Hospedagem (Azure)	| R$ 6.746,62 |
| App Store  | R$ 507,14  |
| Google Play | R$ 108,27 |
| Publicidade e Marketing | R$ 15.000 |
| TOTAL | R$ 87.362,03 |

