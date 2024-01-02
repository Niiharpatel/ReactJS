import React, { useState } from "react";
import { Table } from "reactstrap";

export default function ReduxCrud() {
  //  ===================== CREATE ======================
  let [name, setName] = useState({
    name: "",
    city: "",
  });

  //  ===================== READ ========================

  let [arr, setArr] = useState([]);

  function addDataToTable() {
    setArr([...arr, name]);
    setName({
      name: "",
      city: "",
    });
  }

  //  ===================== UPDATE =======================

  let [ind, setInd] = useState(null);

  function editFun(data, index) {
    setName(data);
    setInd(index);
  }

  function updateToTable() {
    if (ind || ind === 0) {
      arr.splice(ind, 1, name);
      setArr([...arr]);
      setName({
        name: "",
        city: "",
      });
      setInd(null);
    }
  }

  //  ===================== DELETE ========================

  function deleteFun(i) {
    arr.splice(i, 1);
    setArr([...arr]);
  }

  function delAll() {
    setArr([]);
    setInd(null);
  }

  return (
    <>
      <h1>Crud Operation</h1>

      <label htmlFor="name">Name:</label>
      <input
        type="text"
        onChange={(e) => setName({ ...name, name: e?.target?.value })}
        value={name?.name}
        name="name"
      />
      <label htmlFor="city">City:</label>
      <input
        type="text"
        onChange={(e) => setName({ ...name, city: e?.target?.value })}
        value={name?.city}
        name="city"
      />

      <button onClick={() => addDataToTable()}>Submit</button>
      <button onClick={() => updateToTable()}>Update</button>
      <button onClick={() => delAll()}>DeleteAll</button>

      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>City</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {arr.map((e, i) => {
            return (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{e.name}</td>
                <td>{e.city}</td>
                <td>
                  <button onClick={() => editFun(e, i)}>Edit</button>
                  <button onClick={() => deleteFun(i)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}
