import { createContext, useState } from "react";

export const ModalContext = createContext({
    open: false,
    image: null,
    message: "",
    id: "",
    openModal: (param) => {},
    imageModal: (param) => {},
    messageModal: (param) => {},
});

function ModalContextProvider({children}){

    const [open, setOpen] = useState(false);
    const [image, setImage] = useState(null);
    const [message, setMessage] = useState("");
    const [id, setId] = useState("");

    function openModal(param){
         setOpen(param);
    }

    function imageModal(param){
        setImage(param);
   }

   function messageModal(param){
    setMessage(param);
}

function idModal(param){
    setId(param);
}

const value = {
    open: open,
    image: image,
    message: message,
    id: id,
    openModal: openModal,
    imageModal: imageModal,
    messageModal: messageModal,
    idModal: idModal,
}

    return (
            <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
    )
};

export default ModalContextProvider;