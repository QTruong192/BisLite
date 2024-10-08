import React, { useState } from "react";
import ListLayout from "../../../component/ListLayout/ListLayout";
import Pagination from "../../../component/Pagination/Pagination";
import "./PaginatedList.scss";
import { FaMousePointer } from "react-icons/fa";

const PaginatedList = ({ title, productList, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const slicedProducts = productList.slice(startIndex, endIndex);
  const totalPages = Math.ceil(productList.length / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <div className="container">
      <div className="title_wrapper">
        <div>
          <button className="title_button">
            <FaMousePointer />
          </button>
          <span className="title_text">{title}</span>
        </div>
        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPrevPage={handlePrevPage}
            onNextPage={handleNextPage}
          />
        )}
      </div>
      <ListLayout products={slicedProducts} />
    </div>
  );
};

export default PaginatedList;
