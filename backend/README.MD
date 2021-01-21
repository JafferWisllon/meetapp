# ✨ Funcionalidades

#### Cadastro usuários

- [x] Deve ser possivel se cadastrar sua aplicação utilizando nome, e-mail e senha.
- [x] Realize a validação dos dados de entrada.
- [x] Criptografe a senha do usuário para segurança.
- [x] Não deve ser permitido dois usuários com mesmo email.

#### Autenticação

- [x] O usuário deve poder autenticar na aplicação utilizando e-mail e senha.;.
- [x] A autenticação deve ser feita utilizando JWT;
- [x] Realize a validação dos dados de entrada

#### Atualização do usuário

- [x] O usuário deve poder atualizar seu nome, email e senha;
- [x] Realize a validação dos dados de entrada.
- [ ] O usuário deve enviar um campo de confirmação de senha, ao atualizar a senha.
- [ ] Salvar a nova senha criptografada
- [ ] Caso usuário tente alterar o email, verique se o email não está sendo usado

#### Recuperação de senha

- [ ] O usuário deve poder recuperar sua senha informando o seu e-mail;.
- [ ] O usuário deve receber um e-mail com instruções de recuperação de senha;
- [ ] O usuário deve poder resetar sua senha;

#### Gerenciamento de arquivos

- [x] Crie uma rota para upload de arquivos que cadastra em uma tabela o caminho e nome do arquivo e retorna todos dados do arquivo cadastrado.
- [x] Salvar provisoriamente em disco
- [x] Criar rota para servir estaticamente a imagem
- [x] Permitir apenas usuários logados a fazer as operações

#### Gerenciamento de meetups

- [ ] O usuário pode cadastrar meetups na plataforma com título do meetup, descrição, localização, data e hora e imagem (banner).

- [x] Todos campos são obrigatórios.

- [x] Adicione também um campo user_id que armazena o ID do usuário que organiza o evento.

- [x] Não deve ser possível cadastrar meetups com datas que já passaram.

- [ ] O usuário também deve poder editar todos dados de meetups que ainda não aconteceram e que ele é organizador.

- [ ] Crie uma rota para listar os meetups que são organizados pelo usuário logado.

- [ ] O usuário deve poder cancelar meetups organizados por ele e que ainda não aconteceram. O cancelamento deve deletar o meetup da base de dados.
