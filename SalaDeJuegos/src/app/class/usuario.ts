export class Usuario {
  public nombre: string = '';
  public email: string = '';
  public contraseña: string = "";

  constructor(email: string = '') {

    this.email = email;
  }
}
