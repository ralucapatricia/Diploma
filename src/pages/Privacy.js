import FooterP from "../components/FooterP";
import ModalContextProvider from "../contexts/ModalContext";
import ProblemContextProvider from "../contexts/ProblemsContext";

export default function Privacy() {
    return (
        <ProblemContextProvider>
            <ModalContextProvider>
                <FooterP />
            </ModalContextProvider>
        </ProblemContextProvider>

    )
}