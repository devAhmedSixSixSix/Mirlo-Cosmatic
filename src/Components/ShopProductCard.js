import React, { useState } from "react";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import ReactPaginate from "react-paginate";
import Spinner from "react-bootstrap/Spinner";

function ShopProductCard({ filterdData }) {
  const btnStyle = {
    background: "none",
    border: "solid 1px",
    borderColor: "#eee #eee #ccc #eee",
  };

  const [pageNumber, setPageNumber] = useState(0);

  const productPerPage = 8;
  const pagesVisited = pageNumber * productPerPage;

  const displayProducts =
    filterdData === null ? (
      <div className="d-flex justify-content-center align-items-center my-5">
        <Spinner animation="border" />
      </div>
    ) : (
      filterdData
        .slice(pagesVisited, pagesVisited + productPerPage)
        .map((item) => (
          <Col xs={12} md={6} lg={3} key={item.id}>
            <div className="pb-5">
              <img
                src={item.thumbnail}
                alt="teast"
                className="w-100"
                height={200}
              />
              <h6 className="pt-2">
                {item.title.length > 16
                  ? item.title.substring(0, 16) + "..."
                  : item.title}
              </h6>
              <p className="text-muted">{item.category}</p>
              <div className="pb-2">
                <span className="text-danger pe-2">${item.price}</span>
              </div>
              <Link
                to={`/shop/product/${item.id}`}
                className="text-decoration-none"
              >
                <button
                  style={btnStyle}
                  className="py-1 px-3 me-2 w-100 d-block "
                >
                  View Product
                </button>
              </Link>
            </div>
          </Col>
        ))
    );

  const pageCount = Math.ceil(
    filterdData && filterdData.length / productPerPage
  );
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <Row>
      {displayProducts}
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        activeClassName={"paginationActive"}
      />
    </Row>
  );
}

export default ShopProductCard;
