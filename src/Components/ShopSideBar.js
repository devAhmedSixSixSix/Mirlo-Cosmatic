import React from "react";
import Form from "react-bootstrap/esm/Form";
import Button from "react-bootstrap/esm/Button";
import Accordion from "react-bootstrap/esm/Accordion";
function ShopSideBar({
  setLoest,
  setHighest,
  setCategory,
  filterdCategorysNames,
}) {
  const btnBg = {
    background: "#093F65",
    border: 0,
  };

  const getLoest = (e) => {
    setLoest(e.target.value);
  };

  const getHighest = (e) => {
    setHighest(e.target.value);
  };

  const getCategory = (e) => {
    setCategory(e.target.innerHTML);
  };

  return (
    <div className="mb-3">
      <Form>
        <Form.Group
          className="mb-3 d-flex"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Control
            type="text"
            placeholder="Search.."
            className="rounded-0 rounded-start"
          />
          <Button style={btnBg} type="submit" className="rounded-0 rounded-end">
            Search
          </Button>
        </Form.Group>
      </Form>

      <Accordion alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Filter by category</Accordion.Header>
          <Accordion.Body>
            <p onClick={getCategory} className="pointer">
              all
            </p>
            {filterdCategorysNames &&
              filterdCategorysNames.map((item) => (
                <p key={item} onClick={getCategory} className="pointer">
                  {item}
                </p>
              ))}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Filter by price</Accordion.Header>
          <Accordion.Body>
            <div className="d-flex gap-1">
              <div className="w-100">
                <label>Min</label>
                <input type="text" className="w-100" onChange={getLoest} />
              </div>
              <div className="w-100">
                <label>Max</label>
                <input type="text" className="w-100" onChange={getHighest} />
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Sort</Accordion.Header>
          <Accordion.Body>
            <input
              type="radio"
              name="sortBaseOnPrice"
              value="lowToHigh"
              id="lowToHigh"
              className="me-2"
            />
            <label for="lowToHigh">Low To High</label>
            <br />
            <input
              type="radio"
              name="sortBaseOnPrice"
              value="highToLow"
              id="highToLow"
              className="me-2"
            />
            <label for="highToLow"> High to low</label>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default ShopSideBar;
