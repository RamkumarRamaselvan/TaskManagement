import React from "react"
import { Modal, ModalHeader } from "react-bootstrap";
import "./style.css";
const CustomModal = (props) => {
    const {
        modalOpen,
        closeBtn,
        modalCustomClass,
        modalBody,
        closeBtnFuc,
        size,
      } = props;
    return (
        <Modal
            show={modalOpen}
            centered
            dialogClassName={modalCustomClass}
            animation={true}
            size={size}
            id={"modelID"}
            backdrop="static"
        >
      {closeBtn && <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => closeBtnFuc()}>X</button>}
      <Modal.Body>{modalBody(props)}</Modal.Body>
    </Modal>
    )
}
export default CustomModal;