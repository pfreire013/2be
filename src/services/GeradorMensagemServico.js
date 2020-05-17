import { url_api , autenticar} from './ApiServico';
import {enviarMensagens, obterMensagens} from './MensagemServico'


export async function responder(skip) {
    var msgs_respondidas = [];
    var existe_storage = localStorage.getItem('mensagensRespondidas');
    if(existe_storage){
        msgs_respondidas = JSON.parse(sessionStorage.getItem('mensagensRespondidas'));
    }
    var msgs_nao_respondidas = []; 
    var dados = await obterMensagens('externa', null, skip);
    dados.map((dado, index) => {
        if(msgs_respondidas.findIndex(x => x == dado._id) == -1){
            msgs_nao_respondidas.push(dado);
        }
    })

    return msgs_nao_respondidas;
}

export async function usuario(celular, skip) {
    var dados = await obterMensagens(null, celular, skip);
    return dados;
}

export async function enviadas(skip) {
    var dados = await obterMensagens('interna', null, skip);
    return dados;
}

export async function enviar(msgs){
    var dados = await enviarMensagens(msgs);
    return dados;
}

export function salvarResposta(id) {
    var existe_storage = localStorage.getItem('mensagensRespondidas');
    if(existe_storage){
        var msgs = JSON.parse(sessionStorage.getItem('mensagensRespondidas'));
        msgs.ids.push(id);
        localStorage.setItem('mensagensRespondidas', JSON.stringify(msgs));
    }
    else{
        var msgs = {ids: [id]};
        localStorage.setItem('mensagensRespondidas', JSON.stringify(msgs));
    }
}

export function modelarMensagem(tipo, celular, template, texto, parametros) {
    var obj = {
        'tipo': tipo,
        'celular': celular,
        'template': template,
        'texto': texto,
        //'midia': midia,
        'parametros': parametros
    }
    
    return obj;
}
