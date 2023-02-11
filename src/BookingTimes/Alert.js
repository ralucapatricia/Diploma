import "./Alert.css";

import warning from "../IMG/warning.png";

export const Alert = () => {
      return (
        <div
          className="alert-container"
          style={{
            background: "#FDEDED",
            border: "0.1rem solid " + "#F16360",
          }}
        >
          <div
            className="symbol-container"
            style={{ background: "#F16360" }}
          >
            <span class="material-symbols-outlined symbol"><img className="fullybooked" src={warning} alt="" /></span>{" "}
          </div>
          <div className="description-container">
            <span className="description-text">  S-a efectuat deja o înregistrare cu acest cont!</span>
          </div>
        </div>
      );
  };