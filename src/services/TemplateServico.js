import { url_api } from './ApiServico';
import { autenticar } from '../../Servicos/ApiServico';


export async function obterTemplate() {
        const detalhesChamada = {
            method: 'GET',
            headers: autenticar(),
        }

        let res = await fetch(url_api + 'template', detalhesChamada);

        if (!res.ok) {
            let erro = await res.json();
            throw new Error(erro);
        }
        else {
            let dados = await res.json();
            return dados;
        }
    }