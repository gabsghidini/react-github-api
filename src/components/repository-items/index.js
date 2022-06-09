import React from 'react';
import * as S from './styled';

function RepositoryItem({ name, linkToRepo, fullName }) {
  return (
    <S.Wrapper>
      <h2>Repository: {name}</h2>
      <br />
      <h4>Full Repository Name:</h4>
      <a href={linkToRepo} target="_blank" rel="noreferrer">
        {fullName}
      </a>
    </S.Wrapper>
  );
}

export default RepositoryItem;
