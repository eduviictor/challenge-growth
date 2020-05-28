import React from 'react';
import { PaginationWrapper, LeftIcon, RightIcon } from './styles';

interface PaginationProps {
  page: number;
  prev: Function;
  next: Function;
  numberPages: number;
}

function Pagination({ page, numberPages, prev, next }: PaginationProps) {
  return (
    <PaginationWrapper>
      <LeftIcon onClick={() => prev()} />
      {`${page} de ${numberPages}`}
      <RightIcon onClick={() => next()} />
    </PaginationWrapper>
  );
}

export default Pagination;
