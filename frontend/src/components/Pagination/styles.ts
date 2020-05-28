import styled from 'styled-components';
import { LeftArrow } from '@styled-icons/boxicons-solid/LeftArrow';
import { RightArrow } from '@styled-icons/boxicons-solid/RightArrow';

export const PaginationWrapper = styled.div`
  margin-bottom: 16px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const LeftIcon = styled(LeftArrow)`
  width: 20px;
  cursor: pointer;
`;

export const RightIcon = styled(RightArrow)`
  width: 20px;
  cursor: pointer;
`;
