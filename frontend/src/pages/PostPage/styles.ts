import styled from 'styled-components';

export const PostPageWrapper = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  max-width: 60%;

  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

export const PostPageContent = styled.div`
  padding: 20px;
  margin-top: 10px;
  background: #ffffff;
  -webkit-box-shadow: 5px 5px 5px -6px rgba(0, 0, 0, 0.73);
  -moz-box-shadow: 5px 5px 5px -6px rgba(0, 0, 0, 0.73);
  box-shadow: 5px 5px 5px -6px rgba(0, 0, 0, 0.73);
  border-radius: 10px;

  h1 {
    text-transform: capitalize;
    font-size: 18px;
    color: #000000;
    font-style: normal;
    font-weight: 900;
    line-height: 30px;
    letter-spacing: -0.02em;
  }

  hr {
    border: 1px solid #000000;
    margin: 10px 0;
  }

  p {
    font-style: normal;
    font-weight: 325;
    font-size: 18px;
    line-height: 30px;
    letter-spacing: -0.02em;
    padding: 20px 0;
    text-align: justify;
  }
`;

export const PostPageInfo = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    h3 {
      font-size: 14px;
      line-height: 21px;
      letter-spacing: 0.05em;
      font-style: normal;
    }

    small {
      font-size: 11px;
      line-height: 21px;
      letter-spacing: 0.05em;
      font-style: normal;
    }
  }

  button {
    padding: 2px 15px;
    border-radius: 5px;
    cursor: pointer;
    background: #a53692;
    font-style: normal;
    font-weight: 900;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: 0.05em;
    color: #fff;
  }
`;
