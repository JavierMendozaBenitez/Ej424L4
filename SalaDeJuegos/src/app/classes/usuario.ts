export class Usuario {

    public email: string = '';
    public pass: string = '';

    constructor(email: string = '', pass: string = '') {

        this.email = email;
        this.pass = pass;
    }
}
