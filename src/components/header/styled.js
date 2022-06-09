import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;

  input {
    width: 80%;
    height: 30px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border: 1px solid #337dff;
    padding-left: 10px;
  }
  button {
    width: 20%;
    height: 30px;
    background-color: #337dff;
    text-align: center;
    color: white;
    font-size: 1em;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;
