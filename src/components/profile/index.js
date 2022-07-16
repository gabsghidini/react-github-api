import React from 'react';
import useGithub from '../../hooks/github-hooks';
import * as S from './styled';

const Profile = () => {
  const { githubState } = useGithub();

  return (
    <S.Wrapper>
      <S.WrapperImage
        src={githubState.user.avatar_url || 'https://static.wikia.nocookie.net/strangerthings8338/images/e/e7/Suzie_S3.png/'} 
        alt="User Profile"
      />
      <S.WrapperInfoUsers>
        <div>
          <h1>{githubState.user.name || 'Suzie Bingham'}</h1>
          <S.WrapperUserGeneric>
            <h3>Username:</h3>
            <a
              href={githubState.user.html_url || 'https://strangerthings.fandom.com/wiki/Suzie_Bingham'}
              target="_blank"
              rel="noreferrer noopener"
            >
              {githubState.user.login || 'SuzieBingham'}
            </a>
          </S.WrapperUserGeneric>
          <S.WrapperUserGeneric>
            <h3>Company:</h3>
            <span>{githubState.user.company || 'Open to Work!'}</span>
          </S.WrapperUserGeneric>
          <S.WrapperUserGeneric>
            <h3>Location:</h3>
            <span>{githubState.user.location || 'Salt Lake City, Utah'}</span>
          </S.WrapperUserGeneric>
          <S.WrapperUserGeneric>
            <h3>Blog:</h3>
            <a href={githubState.user.blog || 'https://strangerthings.fandom.com/wiki/Suzie_Bingham'} target="_blank" rel="noreferrer noopener">
              {githubState.user.blog || 'Stranger Things'}
            </a>
          </S.WrapperUserGeneric>
        </div>
        <S.WrapperStatusCount>
          <div>
            <h4>Followers</h4>
            <span>{githubState.user.followers || '9999'}</span>
          </div>
          <div>
            <h4>Following</h4>
            <span>{githubState.user.following || '1'}</span>
          </div>
          <div>
            <h4>Gists</h4>
            <span>{githubState.user.public_gists || '3'}</span>
          </div>
          <div>
            <h4>Repositories</h4>
            <span>{githubState.user.public_repos || '7'}</span>
          </div>
        </S.WrapperStatusCount>
      </S.WrapperInfoUsers>
    </S.Wrapper>
  );
};

export default Profile;
