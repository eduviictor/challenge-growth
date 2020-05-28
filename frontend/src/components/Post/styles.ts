import styled from 'styled-components';

export const PostWrapper = styled.div`
  width: 100%;
  background: white;
  padding: 20px;
  -webkit-box-shadow: 5px 5px 5px -6px rgba(0, 0, 0, 0.73);
  -moz-box-shadow: 5px 5px 5px -6px rgba(0, 0, 0, 0.73);
  box-shadow: 5px 5px 5px -6px rgba(0, 0, 0, 0.73);
  margin-top: 16px;
  border-radius: 10px;
  cursor: pointer;
`;

export const PostTitle = styled.h2`
  margin-bottom: 16px;
  /* line-height: 1.4; */
  text-align: justify;
  padding: 5px;
  font-size: 18px;
  text-transform: capitalize;
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
      font-size: 12px;
      margin-right: 3px;
    }

    small {
      font-size: 11px;
      color: rgba(0, 0, 0, 0.7);
    }
  }
`;
