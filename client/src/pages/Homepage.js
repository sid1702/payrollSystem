import React from "react";
import Sidebar from "./Sidebar";
import Employees from "./Employees/Employees";
import { Route, Routes } from "react-router-dom";
import AddEmployee from "./AddEmployees/AddEmployee";

function Homepage() {
  return (
    <div className="container">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Employees />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/addEmployees" element={<AddEmployee />} />
      </Routes>
    </div>
  );
}

export default Homepage;
