import React from "react";
import "./UpdateOverlay.css";
import axios from "axios";

const UpdateOverlay = (props) => {
  const [newDesignation, setNewDesignation] = React.useState("");

  const handleNewDesignation = (e, id) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3001/updateDesignation/${id}`, {
        newDesignation,
      })
      .then((response) => {
        if (response.data.error) {
          alert(response.data.error);
        } else {
          props.handleOverlay();
          props.setAllEmp(response.data.data);
        }
      });
  };

  return (
    <div className="overlay">
      <div className="overlay__background" onClick={props.handleOverlay} />
      <div className="overlay__container">
        <div className="overlay__controls">
          <button
            className="overlay__close"
            type="button"
            onClick={props.handleOverlay}
          />
        </div>
        <form>
          <input
            placeholder="Type in new Designation"
            onChange={(e) => setNewDesignation(e.target.value)}
          />
          <button onClick={(e) => handleNewDesignation(e, props.id)}>
            Update details
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateOverlay;
