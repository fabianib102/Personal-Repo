import React from "react";
import { Table } from "react-bootstrap";

function List(props) {

  return (
    <Table striped bordered hover>
      <tbody>
        {props.data.map((e, i) => {
          return (
            <tr key={i}>
              <td>{e}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default List;
