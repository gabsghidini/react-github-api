import React, { useState } from 'react';
import useGithub from '../../hooks/github-hooks';
import * as S from './styled';

function Header() {
  const { getUser } = useGithub();
  const [usernameForSearch, setusernameForSearch] = useState();

  const submitGetUser = () => {
    if (!usernameForSearch) return;
    return getUser(usernameForSearch);
  }
  return (
        <S.Wrapper>
            <input type='text' placeholder='Insira aqui um usuário github para buscar...' onChange={(event) => setusernameForSearch(event.target.value)}/>
            <button onClick={submitGetUser}>Buscar Dev</button>
        </S.Wrapper>
  )
}

export default Header