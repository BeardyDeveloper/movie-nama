/* eslint-disable max-lines-per-function */
import { ArrowLeft2, ArrowRight2, More } from 'iconsax-react';
import RCPagination from 'rc-pagination';
import type { FC } from 'react';
import styled, { css } from 'styled-components';

import localeInfo from './locale';

interface PaginationProps {
  total: number;
  currentPage: number;
  pageSize?: number;
  defaultPageSize?: number;
  onChange: (current: number) => void;
}

export const Pagination: FC<PaginationProps> = props => {
  const { total, currentPage, pageSize, defaultPageSize, onChange } = props;

  return (
    <Container>
      <StyledRCPagination
        total={total}
        defaultCurrent={1}
        current={currentPage}
        pageSize={pageSize ?? defaultPageSize}
        defaultPageSize={defaultPageSize ?? 8}
        showTitle={false}
        jumpNextIcon={<More size={20} />}
        jumpPrevIcon={<More size={20} />}
        showLessItems
        locale={localeInfo}
        prevIcon={<ArrowLeft2 variant="Bold" size={20} />}
        nextIcon={<ArrowRight2 variant="Bold" size={20} />}
        onChange={onChange}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 18px;
`;

const StyledRCPagination = styled(RCPagination)`
  ${({ theme }) => css`
    direction: ltr !important;
    padding: 6px 12px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    list-style: none;

    .rc-pagination-disabled {
      border: none;
      cursor: no-drop !important;
    }

    .rc-pagination-disabled a,
    .rc-pagination-disabled > svg {
      color: ${theme.text.main.secondary};
    }

    .rc-pagination-prev,
    .rc-pagination-prev:focus,
    .rc-pagination-next,
    .rc-pagination-next:focus {
      outline: none;
      cursor: pointer;
      color: ${theme.text.reverse.primary};
    }

    .rc-pagination-prev,
    .rc-pagination-next {
      width: 32px;
      height: 32px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${theme.palette.Brand[900]};
    }
    .rc-pagination-prev {
      margin-right: 18px;
      padding-right: 2px;
    }
    .rc-pagination-next {
      margin-left: 18px;
      padding-left: 2px;
    }

    .rc-pagination-jump-next,
    .rc-pagination-jump-prev {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 9px;
      cursor: pointer;
      color: ${theme.text.reverse.primary};
      background-color: transparent;
      & > svg {
        fill: ${theme.text.reverse.primary};
      }
    }

    .rc-pagination-jump-next:focus,
    .rc-pagination-jump-prev:focus {
      background-color: transparent;
      outline: none;
    }

    .rc-pagination-item {
      width: 32px;
      height: 32px;
      margin: 0 6px;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      background-color: ${theme.palette.Brand[900]};
      border-radius: 4px;
      cursor: pointer;
      & > a {
        justify-content: center;
        align-items: center;
        text-align: center;
        color: ${theme.text.reverse.primary};
      }
    }

    .rc-pagination-item-active {
      background-color: ${theme.background.main.primary};
      cursor: default;
    }

    .rc-pagination-options {
      display: none;
    }
  `}
`;
