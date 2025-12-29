export interface User {
  id_usuario: string,
  nome: string,
  login_usuario: string,
  senha: string
}

export interface JwtUser {
  userId: number;
  login: string;
}