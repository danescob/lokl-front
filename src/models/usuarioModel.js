export class UsuarioModel {

  id;
  correo;
  hash;
  validado;

  constructor(usuario){
    this.id = usuario.id??undefined;
    this.correo = usuario.correo??undefined;
    this.hash = usuario.hash??undefined;
    this.validado = usuario.validado??false;
  }
}