import React, { useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import SectionBanner from "../Components/SectionBanner";
import ShopProductCard from "../Components/ShopProductCard";
import ShopSideBar from "../Components/ShopSideBar";

function Shop({ filterdData }) {
  // get categorys names
  const [category, setCategory] = useState();
  const categorysNames = [];
  filterdData && filterdData.map((item) => categorysNames.push(item.category));
  const filterdCategorysNames = [...new Set(categorysNames)];

  // filter based on category name
  let data =
    filterdData &&
    filterdData.filter((item) =>
      category === "all" ? filterdData : item.category === category
    );

  // get lowest & highest price
  const itemsPrices = [];
  const higestAndLoestPrice = [];
  data && data.map((ele) => itemsPrices.push(ele.price));
  higestAndLoestPrice.push(Math.max(...itemsPrices), Math.min(...itemsPrices));
  higestAndLoestPrice.sort();

  const [lowest, setLoest] = useState(higestAndLoestPrice[0]);
  const [highest, setHighest] = useState(higestAndLoestPrice[1]);

  // filter based on price
  const filterPrisedData =
    data &&
    data.filter((item) => item.price >= lowest && item.price <= highest);
  const checedFilterPrisedData =
    filterPrisedData && filterPrisedData.length <= 0
      ? filterdData
      : filterPrisedData;

  return (
    <div>
      <SectionBanner title="Shop" subTitle="Home / Shop" />
      <Container className="py-5">
        <Row>
          <Col lg={3}>
            <ShopSideBar
              setLoest={setLoest}
              setHighest={setHighest}
              setCategory={setCategory}
              filterdCategorysNames={filterdCategorysNames}
            />
          </Col>
          <Col lg={9}>
            <Row>
              <Col>
                <ShopProductCard filterdData={checedFilterPrisedData} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Shop;
