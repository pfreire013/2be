import { url_api } from './ApiServico';
import { autenticar } from '../../Servicos/ApiServico';


export async function obterMensagens(origem, celular, skip) {
        let parametros = {
            origem: oriegm ? origem : null,
            celular: celular ? celular : null,
            skip: skip ? skip : null
        }

        var url = new URL(url_api + 'mensagem');
        Object.keys(parametros).forEach(key => url.searchParams.append(key, parametros[key]));

        const detalhesChamada = {
            method: 'GET',
            headers: autenticar(),
        }

        let res = await fetch(url, detalhesChamada);

        if (!res.ok) {
            let erro = await res.json();
            throw new Error(erro);
        }
        else {
            let dados = await res.json();
            return dados;
        }
    }

export async function enviarMensagens(mensagens) {
        let dados = {
            dados: mensagens
        }

        const detalhesChamada = {
            method: 'POST',
            headers: autenticar(),
            body: JSON.stringify(dados)
        }

        let res = await fetch(url + '/mensagem', detalhesChamada);

        if (!res.ok) {
            let erro = await res.json();
            throw new Error(erro);
        }
        else {
            let dados = await res.json();
            return dados;
        }
    }