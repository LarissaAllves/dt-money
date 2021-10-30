import Modal from "react-modal";
import closeImg from "../../assets/close.svg";
import { Container } from "./styles";

interface NewTransactionModelProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModel({
  isOpen,
  onRequestClose,
}: NewTransactionModelProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        className="react-modal-close"
        onClick={onRequestClose}
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>
      <Container>
        <h2>Cadastrar Transação</h2>
        <input placeholder="Título" type="text" />

        <input placeholder="Valor" type="number" />

        <input placeholder="Categoria" type="text" />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
