import { url_api } from './ApiServico';
import { autenticar } from '../../Servicos/ApiServico';

export async function obterMidias() {
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

export async function cadastrarMidia(descricao, arquivo) {
        let dados = {
            descricao: descricao,
            arquivo_base64: arquivo 
        }

        const detalhesChamada = {
            method: 'POST',
            headers: autenticar(),
            body: JSON.stringify(dados)
        }

        let res = await fetch(url + '/midia', detalhesChamada);

        if (!res.ok) {
            let erro = await res.json();
            throw new Error(erro);
        }
        else {
            let dados = await res.json();
            return dados;
        }
    }

export function selecionarDocumento(e) {
        let image = e.target.files[0];
        let form = new FormData();
        form.append('file', image);

        this.converterBase64(image).then(
            res => {
                if (res) {
                    return res;
                }
            }
        );
    }

export function converterBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(null);
        });
    }