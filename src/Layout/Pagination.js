import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

const PaginationComponent = ({
  currentPage,
  pageSize,
  totalCount,
  onChangePage
}) => {
  console.log(totalCount,'totalcount');
  
  const totalPage = Math.ceil(totalCount / pageSize);
  //   Ví dụ totalPage = 5 => [0, 1, 2, 3, 4]
  console.log(totalPage,'total page');
  
  const pages = [...Array(totalPage).keys()];
  return (
    <Pagination>
      {pages.map(page => (
        <PaginationItem>
          <PaginationLink onClick={() => onChangePage(page + 1)}>
            {page + 1}
          </PaginationLink>
        </PaginationItem>
      ))}
    </Pagination>
  );
};

export default PaginationComponent;
