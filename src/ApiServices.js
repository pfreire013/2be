import Autenticacao from './Authentication'

export const url_api = "http://34.217.148.38";

export function autenticar() {
  var servico = new Autenticacao();
    var token = servico.obterTokenUsuario();

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
