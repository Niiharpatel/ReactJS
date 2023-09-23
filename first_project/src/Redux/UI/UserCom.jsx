import React, { useState } from "react";
import { connect } from "react-redux";
import { Button, Table } from "reactstrap";

function UserCom(props) {
  let [index, setIndex] = useState(null);

  return (
    <>
      <Table bordered>
        <thead>
          <tr>
            <th>Sr.</th>
            <th>Email</th>
            <th>Password</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {props?.data?.map((e, i) => {
            return (
              <tr>
                <th scope="row">{i + 1}</th>
                <td>{e.email}</td>
                <td>
                  {index === i ? e?.password : "*".repeat(e?.password?.length)}
                </td>
                <td>
                  {(index || index === 0) && index === i ? (
                    <Button
                      color="primary"
                      className="ms-2"
                      onClick={() => setIndex(null)}
                    >
                      Hide
                    </Button>
                  ) : (
                    <Button
                      color="primary"
                      className="ms-2"
                      onClick={() => setIndex(i)}
                    >
                      Show
                    </Button>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

const toStateToProps = (state) => {
  return {
    data: state?.USER,
  };
};

export default connect(toStateToProps)(UserCom);
