// components/ActivityItem.js
import React from "react";

const ActivityItem = ({ time, image, price, user }) => {
  return (
    <tr className="activity-item">
      <td>{time}</td>
      <td>{image}</td>
      <td>{price}</td>
      <td>{user}</td>
      <td>{time == "  " ? "" : "BUY"}</td>
    </tr>
  );
};

export default ActivityItem;
