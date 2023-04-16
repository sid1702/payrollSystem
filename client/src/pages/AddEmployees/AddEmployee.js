import React from "react";
import axios from "axios";
import "./AddEmployee.css";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
  const navigate = useNavigate();
  const [empNum, setEmpNum] = React.useState("");
  const [name, setName] = React.useState("");
  const [designation, setDesignation] = React.useState("");
  const [nationality, setNationality] = React.useState("");

  const handleAddEmp = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/addEmployee", {
        empNum,
        name,
        designation,
        nationality,
      })
      .then((resp) => {
        if (resp.data.error) {
          console.log(resp.data.error);
        } else {
          navigate("/homepage/employees");
        }
      });
  };
  return (
    <div className="addEmployees">
      <div className="addEmployeesDiv">
        <form>
          <input
            type="text"
            placeholder="Enter Employee Number"
            required
            onChange={(e) => {
              setEmpNum(e.target.value);
            }}
            size="30"
          />
          <input
            type="text"
            placeholder="Enter Employee Name"
            required
            onChange={(e) => {
              setName(e.target.value);
            }}
            size="30"
          />
          <input
            type="text"
            placeholder="Enter Employee Designation"
            required
            onChange={(e) => {
              setDesignation(e.target.value);
            }}
            size="30"
          />
          <input
            type="text"
            placeholder="Enter Employee Nationality"
            required
            onChange={(e) => {
              setNationality(e.target.value);
            }}
            size="30"
          />
          <input type="submit" value="Add employee" onClick={handleAddEmp} />
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;
