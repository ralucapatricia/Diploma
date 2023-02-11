import "./Modal.css";

const Modal = ({ onClosing, messageModal, imageModal }) => {
  return (
    <div className="overlay">
      <div className="modal">
        <img className="imag" src={imageModal} alt="" />
        <div>{messageModal}</div>
        <div className="btnContainer">
          <button onClick={onClosing} className="btnPrimary ">
            <span className="bold">OK</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
