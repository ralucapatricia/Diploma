import MinifotbalField from "../components/MinifotbalField";
import ModalContextProvider from "../contexts/ModalContext";

export default function MinifotbalFieldPage(){
   return (
      <ModalContextProvider>
      <MinifotbalField></MinifotbalField>
      </ModalContextProvider>

   );
}