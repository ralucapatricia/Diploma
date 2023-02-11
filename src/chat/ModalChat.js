import "./ModalChat.css";

const ModalChat = ({children}) => {
    return (
        <div className="overlay_chat">
            <div className="modal_chat">
                {children}
            </div>
        </div>
    )
};

export default ModalChat;