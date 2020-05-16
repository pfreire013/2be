import { url_api } from './ApiServico';
import Cookies from 'js-cookie';


export async function login(key, senha) {
        let autenticacao = {
            Key: key,
            Senha: senha
        }

        const detalhesChamada = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(autenticacao)
        }

        let res = await fetch(url_api + 'autenticar/', detalhesChamada);

        if (!res.ok) {
            let erro = await res.json();
            throw new Error(erro);
        }
        else {
            let dados = await res.json();
            Cookies.set('usuariogr',
                JSON.stringify(dados),
                {
                    path: '',
                    expires: 1/48,
                }
                );
        }
    }

    
export function obterTokenUsuario() {
        var usuario = Cookies.getJSON('usuariogr');
        if (usuario) {
            return usuario.access_token;
        }
    }


export function logout() {
        Cookies.remove('usuariogr', { path: '', domain: 'domain.com' });
    }

