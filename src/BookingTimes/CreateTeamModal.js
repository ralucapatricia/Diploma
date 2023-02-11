import Modal from "../components/Modal";

export default function CreateTeamModal({closeModalHandler}) {
  return <Modal onClosing={(close) => closeModalHandler(close)}></Modal>;
}
