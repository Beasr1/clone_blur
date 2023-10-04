"use client";
import { useState } from "react";
import styles from "./page.module.scss";

const Bids = () => {
  const [tableData, setTableData] = useState([
    {
      price: "25.90",
      size: "8",
      total: "207.20",
      bidders: "3",
    },
    {
      price: "25.89",
      size: "1",
      total: "25.89",
      bidders: "AD0912",
    },
    {
      price: "25.86",
      size: "3",
      total: "77.58",
      bidders: "CBB0Fe",
    },
    {
      price: "25.84",
      size: "25",
      total: "646.00",
      bidders: "2",
    },
    {
      price: "25.05",
      size: "1",
      total: "25.05",
      bidders: "77E3e9",
    },
    {
      price: "25.02",
      size: "1",
      total: "25.02",
      bidders: "000000",
    },
    {
      price: "25.00",
      size: "2",
      total: "50.00",
      bidders: "2",
    },
    {
      price: "24.60",
      size: "1",
      total: "24.60",
      bidders: "E0bC2B",
    },
    {
      price: "24.53",
      size: "2",
      total: "49.06",
      bidders: "515a6c",
    },
    {
      price: "24.51",
      size: "2",
      total: "49.02",
      bidders: "2",
    },
    {
      price: "24.36",
      size: "37",
      total: "901.32",
      bidders: "020cA6",
    },
    {
      price: "23.35",
      size: "1",
      total: "23.35",
      bidders: "545856",
    },
    {
      price: "22.60",
      size: "1",
      total: "22.60",
      bidders: "10FC4A",
    },
    {
      price: "22.44",
      size: "1",
      total: "22.44",
      bidders: "BE2cD0",
    },
  ]);
  return (
    <div className={styles.container}>
      <div className={styles.table_container}>
        <table className={styles.table_content} style={{ width: "100%" }}>
          <thead>
            <tr>
              <th>price</th>
              <th>size</th>
              <th>total</th>
              <th>bidders</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index}>
                <td>{row.price}</td>
                <td>{row.size}</td>
                <td>{row.total}</td>
                <td>{row.bidders}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Bids;
