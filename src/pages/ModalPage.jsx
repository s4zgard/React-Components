import { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";
const ModalPage = () => {
  document.title = "Modal";

  const [showModal, setShowModal] = useState(false);
  const handleModal = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        I Accept
      </Button>
    </div>
  );

  return (
    <div>
      <h2 className="text-xl font-bold m-1">Reusable Modal component.</h2>
      <Button onClick={handleModal} secondary>
        Show Modal
      </Button>
      {showModal && (
        <Modal onClose={handleClose} actionBar={actionBar}>
          This is some text you should accept to close this modal or click
          outside of model to close it.
        </Modal>
      )}
    </div>
  );
};

export default ModalPage;
