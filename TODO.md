## Tarefas

- [x] Criar uma landing page que permita o usuário clicar em um botão e iniciar a aplicação de acordo com o fluxo proposto no README.
- [x] Após o inicio da aplicação o usuário cai no cenário principal da aplicação.
- [x] A ideia aqui é criar um personagem da tela que permita integração com a API e retorne um Pokemon aleatório para ser capturado.
- [x] Essa busca precisa trazer um Pokemon aleatório com um ID randômico de 1 à 807.
- [x] O start da busca é baseado em um clique no personagem.
- [x] Após a busca abrir um modal de acordo com o layout do componente “Capture”.
- [x] Adicionar a esse modal que exibe o Pokemon capturado um botão que permita o usuário liberar esse pokemon capturado.
- [x] No sidebar a esquerda tem um botão que permite o usuário criar um pokemon customizado.
- [x] Após o usuário salvar esse pokemon ele deve aparecer no sidebar ocupando uma das 6 posições disponíveis.
- [ ] A ideia aqui é permitir que o usuário possa editar seu pokemon customizado após a sua criação.
- [x] Os pokemons capturados a partir da busca da API só podem ter o seu nome editado, as outras informações não podem ser editadas.
- [x] Adicionar ao projeto a fonte OpenSans para os textos.
- [x] O sidebar deve conter sempre 6 “espaços”, sendo que caso haja um pokémon capturado, a imagem do “?” deve ser substituída pela imagem do pokémon (após a captura do pokémon ele já deve ser adicionado ao sidebar).
- [x] Traduzir dados que vem da API para pt-BR nos Modais.
- [ ] No modal de formulário é preciso fazer validações e controle de exibição dos erros.
- [ ] Se possível aplicar teste unitário aos componentes.
- [ ] Se possível aplicar teste de integração.
- [ ] Se possível aplicar teste de interface.

## Fluxo

[x] Landing page com um botão para iniciar a aplicação (qualquer url inexistente deve redirecionar o usuário para essa landing page).
[x] Personagem no centro da página.
[x] Barra na esquerda indicando quantos Pokémons ele já capturou (limite de 6) + botão de criação.
[x] Ao passar o mouse no personagem é exibido o tooltip correspondente.
[x] Ao clicar no personagem é feita uma busca por um Pokémon aleatório (id de 1 a 807).
[x] Com o resultado da busca é aberto um modal mostrando os detalhes do Pokémon.
[x] Usuário tem a opção de capturá-lo, clicando na pokébola, ou fechar o modal.
[x] Se ele capturar o Pokémon, esse Pokémon é exibido na SideBar e o modal de captura desaparece.
[x] Usuário pode capturar até 6 Pokémons.
[x] Selecionando qualquer Pokémon na SideBar o usuário pode ver os detalhes do Pokémon.
[x] O(s) tipo(s) do Pokémon deve ser traduzido (ex: water => Água).
[ ] Usuário pode editar SOMENTE o nome de um Pokémon que foi capturado.
[x] Na SideBar o usuário tem a possibilidade de criar um Pokémon (um Pokémon pode ter no máximo 2 "tipos").
[ ] O formulário de criação de Pokémon deve conter validações em todos os campos.
[x] Caso algum campo não esteja preenchido, o botão de criação deve ficar bloqueado.
[ ] Para um Pokémon criado o usuário pode editar qualquer informação ou liberá-lo.
[x] Sempre que liberar um Pokémon é possível capturar outro através da busca ou criar um customizado.
[x] Caso as 6 posições estejam ocupadas o usuário não pode mais buscar nem criar novos Pokémons.
[x] Responsividade para resoluções desktop e mobile. (Ex: 1280 x 720, 360 x 740)


## Entrega

- [ ] Todo o seu código deve ser disponibilizado em um repositório público ou privado em seu Github ou Bitbucket pessoal;
- [ ] Envie o link para FDTE RH;
- [ ] Escolha uma das duas versões abaixo para realizar o teste:
- [ ] Versão com sass;
- [ ] Versão com styled-components;
- [ ] Utilizar a PokéApi para interagir com a aplicação;
- [ ] Usar componentes funcionais e hooks;
- [ ] Não usar componentes de Class;


[PokéApi](https://pokeapi.co/)
[Layout Desktop](https://www.figma.com/proto/l92meWj5EzwY3q8XZro1i0/Teste-Front?node-id=13%3A13571&scaling=min-zoom)
[Layout Mobile](https://www.figma.com/proto/l92meWj5EzwY3q8XZro1i0/Teste-Front?node-id=41%3A18782&scaling=min-zoom)
[Style Guide](https://www.figma.com/proto/l92meWj5EzwY3q8XZro1i0/Teste-Front?node-id=36%3A2135&scaling=min-zoom)
[Componentes](https://www.figma.com/proto/l92meWj5EzwY3q8XZro1i0/Teste-Front?node-id=27%3A18584&scaling=min-zoom)
[Issues](https://bitbucket.org/fdtedsd/teste-frontend/issues)

### Tecnologias

- [x] react-redux
- [x] redux
- [ ] redux-thunk
- [ ] redux-sagas
- [ ] axios
- [x] storybook
- [ ] eslint
- [ ] node-sass
- [x] styled-components
- [ ] prettier
- [ ] prop-types
- [x] typescript
- [ ] react-hook-form
- [x] formik
- [x] yup

#### Observações

Fique a vontade para mudar a estrutura de como estão os exemplos;
Muita atenção ao link das issues por que lá estão descritas as tarefas para serem executadas.
Você pode implementar a aplicação usando typescript, assim como o uso de PropTypes.
Mesmo a aplicação sendo pequena, o uso do redux está liberado.
Os componentes devem ser responsivos.

## Extra

- [ ] Configurar baseUrl