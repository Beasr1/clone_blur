// pages/activity.js
import React from "react";
import ActivityItem from "./ActivityItem";
import styles from "./Activity.module.scss";

const dummyData = [
  {
    time: "  ",
    image: "  ",
    price: "  ",
    user: "  ",
  },
  {
    time: "24m",
    image: 9586,
    price: 28.769,
    user: "0097b9",
  },
  {
    time: "24m",
    image: 9586,
    price: 28.8888,
    user: "dm-on-twitter",
  },
  {
    time: "38m",
    image: 3511,
    price: 27.09,
    user: "cAFba4",
  },
  {
    time: "1h",
    image: 7808,
    price: 33.9,
    user: "7c1958",
  },
  {
    time: "1h",
    image: 7634,
    price: 32.5,
    user: "7c1958",
  },
  {
    time: "1h",
    image: 7808,
    price: 33.9,
    user: "Khalissman",
  },
  {
    time: "21m",
    image: 2190,
    price: 40.0,
    user: "30a5Ca",
  },
  {
    time: "24m",
    image: 3360,
    price: 27.24,
    user: "f15C93",
  },
  {
    time: "38m",
    image: 1487,
    price: 15.99,
    user: "b3d47f",
  },
  {
    time: "45m",
    image: 7239,
    price: 19.75,
    user: "6a2e11",
  },
  {
    time: "52m",
    image: 6218,
    price: 10.5,
    user: "5e8b1d",
  },
  {
    time: "1h",
    image: 9127,
    price: 31.28,
    user: "a8f5c1",
  },
  {
    time: "1h",
    image: 8235,
    price: 12.75,
    user: "b0e2a4",
  },
  {
    time: "1h",
    image: 4512,
    price: 8.99,
    user: "d4e9f7",
  },
];

const ActivityPage = () => {
  return (
    <div className={styles["activity-page"]}>
      <div className={styles.heading_text}>ACTIVITY</div>
      <div className={styles.table_contain}>
        <table className={styles["activity-table"]}>
          <thead className={styles.table_heading}>
            <tr>
              <th>
                {/* <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11.9778 0.600098H2.0222V2.02232H0.599976V11.9779H2.0222V13.4001H11.9778V11.9779H13.4V2.02232H11.9778V0.600098ZM11.9778 2.02232V11.9779H2.0222V2.02232H11.9778ZM6.28886 3.44454H7.71109V7.71121H10.5555V9.13343H6.28886V3.44454Z"></path>
                </svg> */}
                Time
              </th>
              <th>Image</th>
              <th>Price</th>
              <th>User</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody className={styles.table_body_contain}>
            {dummyData.map((item, index) => (
              <ActivityItem key={index} {...item} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ActivityPage;
