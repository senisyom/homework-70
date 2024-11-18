import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ModalProps {
  contact: {
    id: string;
    name: string;
    number: string;
    email: string;
    picture: string;
  } | null;
  onClose: () => void;
  onDelete?: (id: string) => void;
}

const Modal: React.FC<ModalProps> = ({ contact, onClose, onDelete }) => {
  const navigate = useNavigate();
  if (!contact) return null;

  const handleDelete = () => {
    if (onDelete) {
      onDelete(contact.id);
    } else {
      toast.error('Error to delete');
    }
  };

  const toEdit = () => {
    navigate(`/add-new-contact/${contact.id}`);
  };

  return (
    <div
      className="modal fade show d-block"
      tabIndex={-1}
      role="dialog"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Информация о контакте</h5>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            <p>Имя: {contact.name}</p>
            <p>Номер: {contact.number}</p>
            <p>Email: {contact.email}</p>
            <p>
              <img
                src={contact.picture}
                alt="Фото контакта"
                className="img-fluid"
              />
            </p>
          </div>
          <div className="modal-footer">
            <button className="btn btn-warning" onClick={toEdit}>
              Редактировать
            </button>
            <button className="btn btn-danger" onClick={handleDelete}>
              Удалить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
