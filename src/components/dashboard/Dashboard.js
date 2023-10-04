// Dashboard.js
"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Dashboard.module.scss"; // Import the SCSS module
import Sidebar2 from "../sidebar2/Sidebar2";
import Sidebar from "../sidebar/Sidebar";

const Dashboard = ({ children }) => {
  const currentRoute = usePathname();

  return (
    <div className={styles["flex-container"]}>
      <div style={{ width: "25%" }} className={styles.sidebar_contain}>
        <Sidebar />
      </div>

      <div className={styles.page_contain}>
        <div className={styles["flex-row"]} style={{ width: "100%" }}>
          <Link
            href="/"
            className={`${styles.link} ${
              currentRoute === "/" ? styles["active-link"] : ""
            }`}
          >
            <div className={styles.image_body}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
                width="24"
                height="24"
              >
                <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              Items
            </div>
          </Link>
          <Link
            href="/bids"
            className={`${styles.link} ${
              currentRoute === "/bids" ? styles["active-link"] : ""
            }`}
          >
            <div className={styles.image_body}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
                width="24"
                height="24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                />
              </svg>
              Bids
            </div>
          </Link>
          <Link
            href="/loans"
            className={`${styles.link} ${
              currentRoute === "/loans" ? styles["active-link"] : ""
            }`}
          >
            <div className={styles.image_body}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
                width="24"
                height="24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3.75 3.75 0 11-7.5 0 3.75 3.75 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                />
              </svg>
              Loans
            </div>
          </Link>
          <Link
            href="/holders"
            className={`${styles.link} ${
              currentRoute === "/holders" ? styles["active-link"] : ""
            }`}
          >
            <div className={styles.image_body}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                width="24"
                height="24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
              Holders
            </div>
          </Link>
        </div>
        <div className={styles.content_container}>{children}</div>
      </div>
      <div style={{ width: "35%" }} className={styles.sidebar2_contain}>
        <Sidebar2 />
      </div>
    </div>
  );
};

export default Dashboard;
