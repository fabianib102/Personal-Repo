import React, { useState } from "react";
import List from "./List";
import FormStudent from "./FormStudent";
import ErrorMessage from "./ErrorMessage";

function Lift() {
  const [msjError, setMsjError] = useState("");
  const [ studentArray, setStudentArray] = useState([]);

  return (
    <div className="col-sm-6">
      <FormStudent setStudentArray={setStudentArray} setMsjError={setMsjError}/>
      {msjError && <ErrorMessage message={msjError} />}
      <List data={studentArray}/>
    </div>
  );
}

export default Lift;
