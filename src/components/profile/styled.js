import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export const WrapperInfoUsers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin: 8px 0 0 8px;
  height: 200px;
  h1 {
    font-size: 32px;
    font-weight: bold;
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
  }

  h4 {
    font-size: 14px;
    font-weight: bold;
  }
`;

export const WrapperImage = styled.img`
  border-radius: 50%;
  width: 200px;
  height: 200px;
  object-fit: cover;
  margin: 8px;
`;

export const WrapperStatusCount = styled.div`
  display: flex;
  text-align: center;
  div {
    margin: 8px;
  }
`;

export const WrapperUserGeneric = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 8px;
  span {
    margin-left: 5px;
    font-weight: 500;
  }
  a {
    font-size: 18px;
    color: #337DFF;
    font-weight: bold;
    margin: 3px;
  }
`;
