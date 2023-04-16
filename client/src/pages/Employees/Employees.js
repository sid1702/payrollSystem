import React from "react";
import axios from "axios";
import "./Employees.css";
import UpdateOverlay from "../../components/updateOverlay/UpdateOverlay";

function Employees() {
  const [allEmp, setAllEmp] = React.useState([]);
  const [overlay, setOverlay] = React.useState(false);

  const [id, setId] = React.useState("");

  React.useEffect(() => {
    axios.get("http://localhost:3001/getAllEmp").then((result) => {
      setAllEmp(result.data.data);
    });
  }, []);

  const handleEmpDelete = (id) => {
    axios
      .delete(`http://localhost:3001/deleteEmployee/${id}`)
      .then((response) => {
        if (response.data.error) {
          alert(response.data.error);
        } else {
          setAllEmp(
            allEmp.filter((emp) => {
              return emp._id !== id;
            })
          );
        }
      });
  };

  const handleOverlay = (id) => {
    setId(id);
    setOverlay(!overlay);
  };

  return (
    <div className="employees">
      {overlay && (
        <UpdateOverlay
          setAllEmp={setAllEmp}
          handleOverlay={handleOverlay}
          id={id}
        />
      )}
      <div className="employeesTableDiv">
        <table border="1">
          <tbody>
            <tr>
              <th>Employee Number</th>
              <th>Name</th>
              <th>Designation</th>
              <th>Nationality</th>
            </tr>
            {allEmp.map((i) => {
              return (
                <tr key={i._id}>
                  <td>{i.EmpNo}</td>
                  <td>{i.Name}</td>
                  <td>{i.Designation}</td>
                  <td>{i.Nationality}</td>
                  <td>
                    <button onClick={() => handleOverlay(i._id)}>Update</button>
                  </td>
                  <td>
                    <button onClick={() => handleEmpDelete(i._id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Employees;
