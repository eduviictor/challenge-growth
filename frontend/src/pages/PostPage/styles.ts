import styled from 'styled-components';

export const PostPageWrapper = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  width: 600px;
`;

export const PostPageContent = styled.div`
  padding: 20px;
  margin-top: 10px;
  background: white;
  -webkit-box-shadow: 5px 5px 5px -6px rgba(0, 0, 0, 0.73);
  -moz-box-shadow: 5px 5px 5px -6px rgba(0, 0, 0, 0.73);
  box-shadow: 5px 5px 5px -6px rgba(0, 0, 0, 0.73);
  border-radius: 10px;

  h1 {
    text-transform: capitalize;
    font-size: 18px;
  }

  hr {
    border: 1px solid #ccc;
    margin: 10px 0;
  }

  p {
    text-align: justify;
    padding: 25px 0;
    line-height: 1.5;
  }
`;

export const PostPageInfo = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    h3 {
      font-size: 14px;
    }

    small {
      font-size: 11px;
    }
  }

  button {
    padding: 2px 15px;
    border-radius: 5px;
    cursor: pointer;
  }
`;
