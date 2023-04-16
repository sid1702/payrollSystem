import React from "react";
import * as RiIcons from "react-icons/ri";
export const SideBarData = [
  {
    title: "File Setup",
    iconDown: <RiIcons.RiArrowDownSFill />,
    iconUp: <RiIcons.RiArrowUpSFill />,
    submenu: [
      {
        title: "Employee List",
        link: "/homepage/employees",
      },
      {
        title: "Add Employee",
        link: "/homepage/addEmployees",
      },
      {
        title: "Nationality",
      },
      {
        title: "Section",
      },
      {
        title: "Religion",
      },
      {
        title: "Job Code",
      },
      {
        title: "Company Info",
      },
    ],
  },
  {
    title: "Payroll",
    iconDown: <RiIcons.RiArrowDownSFill />,
    iconUp: <RiIcons.RiArrowUpSFill />,
    submenu: [
      {
        title: "Time card entry",
      },
      {
        title: "Time card Printing",
      },
    ],
  },
  {
    title: "Queries",
    iconDown: <RiIcons.RiArrowDownSFill />,
    iconUp: <RiIcons.RiArrowUpSFill />,
    submenu: [
      {
        title: "Date conversion",
      },
      {
        title: "Current Emp. list",
      },
    ],
  },
];
