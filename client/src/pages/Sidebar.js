import React from "react";
import { SideBarData } from "./SideBarData";
import SidebarMenus from "./SidebarMenus";

function Sidebar() {
  return (
    <div className="sidebar">
      {SideBarData.map((menu, index) => {
        return <SidebarMenus menu={menu} key={index} />;
      })}
    </div>
  );
}

export default Sidebar;
