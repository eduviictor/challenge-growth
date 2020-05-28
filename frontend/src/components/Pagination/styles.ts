import styled from 'styled-components';
import { LeftArrow } from '@styled-icons/boxicons-solid/LeftArrow';
import { RightArrow } from '@styled-icons/boxicons-solid/RightArrow';

export const PaginationWrapper = styled.div`
  margin-bottom: 16px;
  width: 100%;
  display: flex;
  justify-content: center;
  color: #9b9b9b;
`;

export const LeftIcon = styled(LeftArrow)`
  width: 25px;
  cursor: pointer;
  color: #9b9b9b;
  margin: 0 5px;
`;

export const RightIcon = styled(RightArrow)`
  width: 25px;
  cursor: pointer;
  color: #9b9b9b;
  margin: 0 5px;
`;
