import React, { Fragment } from "react";
import "./style.css";

const Columns = () => {
  return (
    <Fragment>
      <td style={{ color: "red", textTransform: "uppercase" }}>Inline</td>
      <td className="title">Simple</td>
    </Fragment>
  );
};

const Table = () => (
  <table>
    <tbody>
      <tr>
        <Columns />
      </tr>
    </tbody>
  </table>
);

export default Table;
