import React, { useState } from 'react';
import { url_api } from './ApiServico';
import Cookies from 'js-cookie';


function Authentication(props) {
  const [login, setLogin] = useState()
  const [logout, setLogout] = useState()

  const login = async (key, senha) => {
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

const obterTokenUsuario = () => {
  var usuario = Cookies.getJSON('usuariogr');
  if (usuario) {
      return usuario.access_token;
  }
}


const logout = () => {
  Cookies.remove('usuariogr', { path: '', domain: 'domain.com' });
}


}

export default Authentication;