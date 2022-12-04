import React from "react";
import Form from "react-bootstrap/esm/Form";

function CheckOutForm() {
  const btnBg = {
    background: "#093F65",
    border: 0,
  };
  return (
    <div className="pb-3">
      <Form>
        <div className="d-flex gap-2">
          <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
            <Form.Label>Frist Name</Form.Label>
            <Form.Control type="text" placeholder="Frist Name" />
          </Form.Group>
          <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Last Name" />
          </Form.Group>
        </div>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <div className="d-flex gap-2">
          <Form.Group className="mb-3 w-25" controlId="formBasicEmail">
            <Form.Label>State</Form.Label>
            <Form.Control type="text" placeholder="State" />
          </Form.Group>
          <Form.Group className="mb-3 w-75" controlId="formBasicEmail">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="City" />
          </Form.Group>
        </div>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Addres</Form.Label>
          <Form.Control type="text" placeholder="Addres" />
        </Form.Group>
        <div className="d-flex gap-2">
          <Form.Group className="mb-3 w-75" controlId="formBasicEmail">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="text" placeholder="Phone Number" />
          </Form.Group>
          <Form.Group className="mb-3 w-25" controlId="formBasicEmail">
            <Form.Label>Zip Code</Form.Label>
            <Form.Control type="text" placeholder="Zip Code" />
          </Form.Group>
        </div>
        <button
          style={btnBg}
          className="py-2 px-5 mt-3 rounded text-white m-auto d-block w-100"
        >
          Place Order
        </button>
      </Form>
    </div>
  );
}

export default CheckOutForm;
