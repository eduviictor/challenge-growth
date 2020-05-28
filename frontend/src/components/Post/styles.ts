import styled from 'styled-components';

export const PostWrapper = styled.div`
  width: 100%;
  background: #ffffff;
  padding: 20px;
  -webkit-box-shadow: 5px 5px 5px -6px rgba(0, 0, 0, 0.73);
  -moz-box-shadow: 5px 5px 5px -6px rgba(0, 0, 0, 0.73);
  box-shadow: 5px 5px 5px -6px rgba(0, 0, 0, 0.73);
  margin-top: 16px;
  border-radius: 10px;
  cursor: pointer;
`;

export const PostTitle = styled.h2`
  text-align: justify;
  padding: 4px;
  text-transform: capitalize;
  font-size: 18px;
  color: #000000;
  font-style: normal;
  font-weight: 900;
  line-height: 30px;
  letter-spacing: -0.02em;
`;

export const PostInfo = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: flex-end;

  div {
    display: flex;
    /* flex-direction: column; */
    padding: 0 10px;
    align-items: center;

    h3 {
      font-size: 13px;
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
`;
