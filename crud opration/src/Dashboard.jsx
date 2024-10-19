import React from "react";
import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";
import Users from "./Users";

export default function Dashboard() {
  return (
    <div>
      <TopBar />
      <div className="content-flex">
        <SideBar />
        <Users />
      </div>
    </div>
  );
}
