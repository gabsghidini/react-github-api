import React from 'react';
import Layout from './components/layout';
import Profile from './components/profile';
import Repositories from './components/repositories';
import useGithub from './hooks/github-hooks';

function App() {
  const { githubState } = useGithub();

  return (
    <Layout>
      {githubState.hasUser ? (
        <>
          {githubState.loading ? (
            <p>Loading</p>
          ) : (
            <>
              <Profile />
              <Repositories />
            </>
          )}
        </>
      ) : (
        <>
          <Profile />
          <div>Nenhum usuário encontrado. Enquanto não conseguimos achar um usuário, por que não apreciar este que eu fiz da série favorita da minha esposa?</div>
        </>
      )}
    </Layout>
  );
}

export default App;
