import React from "react";

interface Props {
  contact: {
    name: string;
    number: string;
    email: string;
    picture: string;
  } | null;
  onClose: () => void;
}

const Modal: React.FC<Props> = ({ contact, onClose }) => {
  if (!contact) return null;

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
            <button className="btn btn-warning">Редактировать</button>
            <button className="btn btn-danger">Удалить</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
