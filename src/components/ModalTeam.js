import "./Modal.css";

const Modal = ({ onClosing, children }) => {
  return (
    <div className="overlay">
      <div className="modal_team">
        <div>{children}</div>
        <button onClick={onClosing} className="bold_container">
          <span className="bold_team">OK</span>
        </button>
        </div>
    </div>
  );
};

export default Modal;
