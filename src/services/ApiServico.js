import { obterTokenUsuario } from './Autenticacao';


export const url_api = "http://34.217.148.38/";


export function autenticar() {
    var token = obterTokenUsuario();

    if (token) {
        let cabecalho = new Headers();
        cabecalho.append('Authorization', 'Bear ' + token);
        cabecalho.append('Content-Type', 'application/json');
        return cabecalho;
    }
    else {
        return {};
    }
}