import { url_api } from './ApiServico';
import { domain } from '../API'
import Cookies from 'js-cookie';


export async function login(key, senha) {
        let autenticacao = {
            key_acesso: key,
            password: senha
        }

        const detalhesChamada = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(autenticacao)
        }

        let res = await fetch('http://34.217.148.38/autenticacao/', detalhesChamada);

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

