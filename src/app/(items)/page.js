"use client";
import React, { useState } from "react";
import styles from "./page.module.scss";
const TablePage = () => {
  const [tableData, setTableData] = useState([
    {
      id: 2083,
      img: "https://images.blur.io/_blur-prod/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/2083-99c224b95f0ab47e?w=64",
      listed: "7215",
      rarity: "26.28",
      buyNow: "24.01",
      lastSale: "25.91",
      topBid: "4c66A9",
      owner: "1",
      held: 1,
      time: "2h",
    },
    {
      id: 7491,
      img: "https://images.blur.io/_blur-prod/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/7491-2645f43fc47505d9?w=64",
      listed: "7683",
      rarity: "26.45",
      buyNow: "25.89",
      lastSale: "25.90",
      topBid: "86c36A",
      owner: "4",
      held: 4,
      time: "54m",
    },
    {
      id: 2779,
      img: "https://images.blur.io/_blur-prod/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/5896-64321736707e4398?w=64",
      listed: "5529",
      rarity: "26.50",
      buyNow: "25.87",
      lastSale: "25.90",
      topBid: "7Df70b",
      owner: "6",
      held: 6,
      time: "20h",
    },
    {
      id: 5888,
      img: "https://images.blur.io/_blur-prod/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/9126-8f45445c6f1496e8?w=64",
      listed: "8324",
      rarity: "26.50",
      buyNow: "25.82",
      lastSale: "25.90",
      topBid: "7Df70b",
      owner: "6",
      held: 6,
      time: "8h",
    },
    {
      id: 9130,
      img: "https://images.blur.io/_blur-prod/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/5521-f7f4e50a645f8c70?w=64",
      listed: "5421",
      rarity: "26.50",
      buyNow: "25.91",
      lastSale: "25.90",
      topBid: "7Df70b",
      owner: "6",
      held: 6,
      time: "20h",
    },
    {
      id: 9828,
      img: "https://images.blur.io/_blur-prod/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/7958-c45a9e1669ca11c3?w=64",
      listed: "5980",
      rarity: "26.50",
      buyNow: "25.91",
      lastSale: "25.90",
      topBid: "7Df70b",
      owner: "6",
      held: 6,
      time: "20h",
    },
    {
      id: 9977,
      img: "https://images.blur.io/_blur-prod/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/3058-51524a9698dd1417?w=64",
      listed: "2415",
      rarity: "26.50",
      buyNow: "25.85",
      lastSale: "25.90",
      topBid: "7Df70b",
      owner: "6",
      held: 6,
      time: "8h",
    },
    {
      id: 1234,
      img: "https://images.blur.io/_blur-prod/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/9860-cf344f741e7c7fca?w=64",
      listed: "5678",
      rarity: "26.75",
      buyNow: "26.00",
      lastSale: "26.50",
      topBid: "9aBcDe",
      owner: "2",
      held: 2,
      time: "1d",
    },
    {
      id: 5678,
      img: "https://images.blur.io/_blur-prod/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/9406-da2122f171993de8?w=64",
      listed: "1234",
      rarity: "26.92",
      buyNow: "25.75",
      lastSale: "26.25",
      topBid: "8bCgHt",
      owner: "3",
      held: 3,
      time: "15h",
    },
    {
      id: 9876,
      img: "https://images.blur.io/_blur-prod/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/3631-9fe59c8f2a8f28c0?w=64",
      listed: "5432",
      rarity: "26.10",
      buyNow: "25.50",
      lastSale: "26.00",
      topBid: "7aBcDe",
      owner: "5",
      held: 5,
      time: "12h",
    },
  ]);

  return (
    <div className={styles.container}>
      <div className={styles.table_container}>
        <table className={styles.table_content} style={{ width: "100%" }}>
          <thead>
            <tr>
              <th>#</th>
              <th>LISTED</th>
              <th>RARITY</th>
              <th>BUY NOW</th>
              <th>LAST SALE</th>
              <th>TOP BID</th>
              <th>OWNER</th>
              <th>#HELD</th>
              <th>TIME</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index}>
                <td>
                  <img src={row.img} />
                </td>
                <td>{row.listed}</td>
                <td>{row.rarity}</td>
                <td>{row.buyNow}</td>
                <td>{row.lastSale}</td>
                <td>{row.topBid}</td>
                <td>{row.owner}</td>
                <td>{row.held}</td>
                <td>{row.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TablePage;
