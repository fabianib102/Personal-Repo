import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

function FormStudent({ setStudentArray, setMsjError }) {
  const [name, setName] = useState("");

  const addStudent = () => {
    setMsjError("");
    if (name == "") {
      setMsjError("You have to complete the name");
    } else {
      setStudentArray((prevList) => [...prevList, name]);
    }
    setName("");
  };

  const clearStudent = () => {
    setStudentArray([]);
  }

  return (
    <Row className="align-items-center">
      <Col sm={8} className="my-2">
        <Form.Control
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </Col>
      <Col xs="auto" className="my-2">
        <Button variant="primary"
          onClick={() => {
            addStudent();
          }}
        >
          Add
        </Button>
      </Col>
      <Col xs="auto" className="my-2">
        <Button variant="danger"
          onClick={() => {
            clearStudent();
          }}
        >
          Clear
        </Button>
      </Col>
    </Row>
  );
}

export default FormStudent;
