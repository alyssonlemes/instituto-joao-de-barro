import { useState } from "react"
import { Modal } from "../../../../../components/Modal/Modal"
import { useCustomEvent } from "../../../../../utils/useCustomEvent";
import { BuildingRegisterForm } from "../forms/BuildingRegisterForm";

export const BuildingRegisterModal = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

    function handleModalOpen() {
      setIsModalOpen(true);
    }
    
    function handleModalClose() {
      setIsModalOpen(false);
    }
    
    useCustomEvent("building:open-register-modal", handleModalOpen);


    return (
      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <div className="modal-container">
          <h1>Novo Registro <span>Obra</span></h1>
          <BuildingRegisterForm />
        </div>
      </Modal>
    )
}