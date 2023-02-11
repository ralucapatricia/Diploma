import TextProfile from "../components/TextProfile";
import ModalContextProvider from "../contexts/ModalContext";
import ProfilContextProvider from "../contexts/ProfilContext";

export default function Profile() {
    return (
        <ProfilContextProvider>
            <ModalContextProvider>
                <TextProfile></TextProfile>
            </ModalContextProvider>
        </ProfilContextProvider>
    );
}