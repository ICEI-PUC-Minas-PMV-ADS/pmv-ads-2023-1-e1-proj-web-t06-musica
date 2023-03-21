# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

A plataforma de contratação de músicos locais é um projeto que consiste em uma plataforma online que conecta músicos e bandas locais a potenciais contratantes para eventos diversos. Para a especificação do projeto, foram utilizadas técnicas como a definição do diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais, além das restrições do projeto, que foram montados através de imersão da equipe e entrevistas com potenciais usuários. O projeto será desenvolvido com a ajuda de frameworks e linguagens de programação, além de testes de qualidade e segurança para garantir que a plataforma seja funcional, segura e atenda aos requisitos estabelecidos.

## Personas

**Persona empresário**:
Meu nome é Arthur Lima Cardoso, tenho 45 anos, possuo superior incompleto, moro em Belo Horizonte, MG. Minha renda varia entre R$1.0000 e
R$5.000.

**Biografia**:
Empresário no ramo de alimentação. No começo sempre trabalhei de CLT como corretor, mas quando o mercado Imobiliário entrou em baixa, tive a ideia de entrar nesse ramo. 

Juntei as minhas economias e abri o meu bar com o diferencial de se ter música ao vivo, na época da inauguração era algo diferente, então tudo acabou dando muito certo e o meu negócio cresceu rapidamente.

**Metas**:
Continuar com uma renda estável no meu negócio.

**Motivação**:
Sou uma pessoa muito família, a minha esposa sempre apoiou a minha ideia de criar meu próprio negócio, então agora que deu tudo certo, quero que esse negócio seja o negócio da família. O meu desejo é que tudo que foi construído gere renda para as minhas gerações futuras.

**Frustrações**:
Esta cada vez mais difícil encontrar artistas com disponibilidade e preços acessíveis para realizar apresentações no meu bar.

**Bloqueadores**:
A gestão dos shows e a criação de uma agenda é o meu maior bloqueador, há dias que não consigo artistas para se apresentar, pois na maioria das vezes os músicos que possuo contato tem outros shows e eventos confirmados.  Acabo perdendo uma parte significativa dos meus clientes justamente por eu não ter acesso ao contato de mais músicos.

**Persona músico**:
Meu nome é James E. Renzi, tenho 24 anos, estudei até completar o ensino médio e moro em Belo Horizonte, MG. Hoje a minha renda varia conforme o trabalho que eu consigo ao longo do mês.

**Biografia**: (atualizando)
Comecei a trabalhar com música aos 14 anos. Tinha um grupo de rap perto da minha casa, eu gostava de participar dos eventos. Com isso fiquei muito motivado e treinei bastante as minhas músicas em casa, sozinho mesmo.  Descobri que tinha talento e muita facilidade, desde então busco com mais reconhecimento, quero ir cada vez mais longe. 

Cheguei a ter uma dupla para escrever algumas músicas, mas acabou não dando certo essa parceria. Não desisti e mesmo assim segui me apresentando em alguns bares e comecei a dar aula de composição musical para alguns garotos do meu bairro.

Mesmo não tendo o sucesso e o reconhecimento que eu quero, consegui fazer alguns contatos na minha região e atualmente me apresento em alguns bairros próximos da minha casa.

**Metas**:
 Ser conhecido pelo meu trabalho, espalhar as minhas mensagens por todo o Brasil e incentivar os mais novos a seguirem os seus sonhos.
 
**Motivações**:
 Mudar a vida da minha família através do meu trabalho.

**Frustrações**:
Dificuldade de ter visibilidade nas redes sociais. Depois que a pandemia começou, a escassez de shows se tornou muito grande. Ficou muito difícil divulgar o meu trabalho e ter uma renda fixa apenas com a música. 

**Bloqueadores**:
 Não tenho empresário ou agência. A minha renda é variável, não tenho um valor fixo para investir mensalmente em meu trabalho musical.
 Não possuo uma maneira de "ranquear" o meu trabalho e de mostrar a qualidade dele para as pessoas que não me conhecem. Com mais visibilidade e divulgação eu iria conseguir atrair mais oportunidades de contração além do meu público habitual.
 
## Histórias de Usuários

**Empresário**

| Necessidade                               | Para isso...                             | Motivo                                              |
|-------------------------------------------|------------------------------------------|-----------------------------------------------------|
| Desejo aumentar a frenquência de clientes | Preciso de artistas com disponibilidade   | Para manter o entreterimento no meu bar diariamente |
| Desejo maior variedade de clientes        | Preciso de uma maior diversidade musical | Atrair um público novo                              |
| Manter a clientela por mais tempo no bar  | Preciso de um evento com mais atrações   | Manter o público consumindo no bar                  |
| Contratar um produto de qualidade         | Preciso de um meio de avaliação          | Manter o alto nível das atrações                    |



**Artista**

| Necessidade                               | Para isso...                                                                       | Motivo                                                                |
|-------------------------------------------|------------------------------------------------------------------------------------|----------------------------------------------------------------------|
| Desejo conseguir contratos                | Preciso de uma ferramenta que exponha meu perfil para os contratantes              | Divulgar o meu trabalo                                                |
| Desejo fazer parcerias musicais           | Preciso de um meio de comunicação entre os artistas para organizar maiores eventos | Promover shows com maior arrecadação                                  |
| Desejo mostrar a qualidade do meu trabalho| Preciso de uma ferramenta de avaliação                                             | Entender se preciso melhorar e precificar melhor o meu trabalho |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

**Requisitos**

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

**Requisitos Funcionais**

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário cadastre tarefas | ALTA | 
|RF-002| Emitir um relatório de tarefas no mês   | MÉDIA |


**Requisitos não Funcionais**

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

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

**Restrições**

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
