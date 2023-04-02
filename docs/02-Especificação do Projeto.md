# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

A plataforma de contratação de músicos locais é um projeto que consiste em uma plataforma online que conecta músicos e bandas locais a potenciais contratantes para eventos diversos. Para a especificação do projeto, foram utilizadas técnicas como a definição do diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais, além das restrições do projeto, que foram montados através de imersão da equipe e entrevistas com potenciais usuários. 

O projeto será desenvolvido com a ajuda de frameworks e linguagens de programação, além de testes de qualidade e segurança para garantir que a plataforma seja funcional, segura e atenda aos requisitos estabelecidos.

## Personas

**Persona empresário**[^1]:

![](https://img.freepik.com/fotos-premium/bar-proposta-inclinada-no-balcao-de-bar_107420-41491.jpg?w=996)

Fonte: https://br.freepik.com/fotos-premium/bar-proposta-inclinada-no-balcao-de-bar_7092817.htm#page=5&query=homem%2045%20anos%20bar&position=46&from_view=search&track=ais

**Biografia**:

Meu nome é Arthur Lima Cardoso, tenho 45 anos, possuo superior incompleto, moro em Belo Horizonte, MG. Minha renda varia entre R$1.000,00 e
R$5.000,00.

Empresário no ramo de alimentação. No começo sempre trabalhei de CLT como corretor, mas quando o mercado Imobiliário entrou em baixa, tive a ideia de entrar nesse ramo alimentício.

Juntei as minhas economias e abri o meu bar com o diferencial de se ter música ao vivo, na época da inauguração era algo diferente, então tudo acabou dando muito certo e o meu negócio cresceu rapidamente.

**Metas**:
Continuar com uma renda estável no meu negócio.

**Motivação**:
Sou uma pessoa muito família, a minha esposa sempre apoiou a minha ideia de criar meu próprio negócio, então agora que deu tudo certo, quero que esse negócio seja o negócio da família. O meu desejo é que tudo que foi construído gere renda para as minhas gerações futuras.

**Frustrações**:
Esta cada vez mais difícil encontrar artistas com disponibilidade e preços acessíveis para realizar apresentações no meu bar.

**Bloqueadores**:
A gestão dos shows e a criação de uma agenda é o meu maior bloqueador, há dias que não consigo artistas para se apresentar, pois na maioria das vezes os músicos que possuo contato tem outros shows e eventos confirmados.  Acabo perdendo uma parte significativa dos meus clientes justamente por eu não ter acesso ao contato de mais músicos.

**Persona músico**[^2]:

![](https://img.freepik.com/fotos-gratis/homem-bonito-e-elegante-espanhol-tentando-alcancar-a-camera-com-a-mao-em-um-fundo-de-parede-vermelha_181624-54210.jpg?w=996&t=st=1679593928~exp=1679594528~hmac=f5ffac1cd52894d9d40a54d5493a1b4b5d17fac305e6631c2ea5cda0b4d70bf3)

Fonte: https://br.freepik.com/fotos-gratis/homem-bonito-e-elegante-espanhol-tentando-alcancar-a-camera-com-a-mao-em-um-fundo-de-parede-vermelha_20711955.htm#query=rap%2025%20anos&position=20&from_view=search&track=ais

**Biografia**: 

Meu nome é James Renzi, tenho 24 anos, estudei até completar o ensino médio e moro em Belo Horizonte, MG. Hoje a minha renda varia conforme o trabalho que eu consigo ao longo do mês.

Comecei a trabalhar com música aos 14 anos, tinha um grupo de rap perto da minha casa onde eu gostava de participar frequentemente dos eventos. Com essas minhas participações eu fiquei muito motivado e comecei a compor as minhas próprias músicas autorais.

Descobri que tinha talento e muita facilidade e desde então busco ter mais reconhecimento. Quero ter um espaço para conseguir divulgar as minhas canções ao público. 

Cheguei a ter uma dupla para escrever algumas músicas, mas acabou não dando certo essa parceria. Não desisti e mesmo assim segui me apresentando em alguns bares e comecei a dar aula de composição musical para alguns garotos do meu bairro.

Mesmo não tendo o sucesso e o reconhecimento que eu quero, consegui fazer alguns contatos na minha região e atualmente me apresento em alguns bairros próximos da minha casa.

**Metas**:
Conseguir ter uma renda fixa com os meus shows.
 
**Motivações**:
 Mudar a vida da minha família através do meu trabalho. Ser conhecido pelo meu trabalho, espalhar as minhas mensagens por todo o Brasil e incentivar os mais novos a seguirem os seus sonhos.
 
**Frustrações**:
Dificuldade de ter visibilidade nas redes sociais. Depois que a pandemia começou, a escassez de shows se tornou muito grande. Ficou muito difícil divulgar o meu trabalho e ter uma renda fixa apenas com a música. 

**Bloqueadores**:
 Não tenho empresário ou agência. A minha renda é variável, não tenho um valor fixo para investir mensalmente em meu trabalho musical.
 Não possuo uma maneira de "ranquear" o meu trabalho e de mostrar a qualidade dele para as pessoas que não me conhecem. Com mais visibilidade e divulgação eu iria  conseguir atrair mais oportunidades de contração além do meu público habitual.
 
 [^1]: https://soundcloud.com/diogoamanciosilva/sets/entrevista-com-rodrigo-florindo-persona-empresario
 [^2]: https://soundcloud.com/diogoamanciosilva/entrevista-henrique-netto-musicocantor
 
 
## Histórias de Usuários 

| Eu como (Persona) | Quero/Desejo (O QUE) | Para que (POR QUE) |
| ----------------- | ----------------- | ---------------- |
| Contratante | Encontrar músicos por local e estilo músical com facilidade.| Poder contratar artistas próximos e conhecer novos músicos locais com as características desejadas. |
| Contratante | Obter informações de contato e redes sociais dos músicos. | Poder entrar em contato diretamente com os músicos selecionados. |
| Músico/Banda | Oferecer as minhas informações de contato de um jeito fácil para que potências contratantes consigam ter acesso a uma comunicação de forma rápida. | Aumentar a visibilidade do artista para ele ser contratado pelos contratantes com facilidade. |
| Músico/Banda | Divulgar a qualidade do meu trabalho a partir dos shows que já fiz mediante a opinião de quem já o contratou. | Para aumentar as chances de ser contratado e melhorar a remuneração do cachê.|


**Requisitos**

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

**Requisitos Funcionais**

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RNF-001| Permitir o cadastro do usuário. | ALTA |
|RNF-002| Permitir um mecanismo de avaliação dos músicos. | ALTA |
|RNF-003| Permitir um mecanismo de contato entre artistas e contratantes.	 | ALTA |
|RNF-004| Permitir que o artista apresente todas as suas diversas informações e os meios de contato desejado.| ALTA |
|RNF-005| Deve haver um mecanismo de busca para escolha de artistas por gênero e região geográfica.| ALTA |


**Requisitos não Funcionais**

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivel móvel.| ALTA|
|RNF-002| O sistema deve processar requisições do usuário em no máximo 3s. | MÉDIA | 
|RNF-003| O sistema deve oferecer um sistema de segurança aos dados.| ALTA|
|RNF-004| O sistema deve respeitar a privacidade das pessoas que interagem por ele.| ALTA |
|RNF-005| A interface do sistema deve ser intuitiva para que o usuário não precise fazer um treinamento para uso.| ALTA |
|RNF-006| O sistema deve ser compatível com os navegadores mais utilizados do mercado: Google Chrome, Apple Safari, Microsoft Edge, Mozilla Firefox, Samsung Internet e  Opera.| ALTA |


**Restrições**

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre letivo: 25/06/2023.|
|02| O projeto não pode ser desenvolvido um módulo de backend.|
|03| O projeto deve ser desenvolvido apenas pelos membros do grupo.|
|04| O código do projeto deve ser publicado no Github.|



