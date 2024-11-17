import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getContact } from "../../thunk";
import { selectContacts, selectFetchLoading } from "../../slice";
import Modal from "../../components/Modal/Modal";
import { IContact } from "../../types";

const ContactList = () => {
  const dispatch = useAppDispatch();
  const contacts = useAppSelector(selectContacts);
  const loading = useAppSelector(selectFetchLoading);


  const [selectedContact, setSelectedContact] = useState<IContact | null>(null);

  useEffect(() => {
    dispatch(getContact());
  }, [dispatch]);

  if (loading) {
    return <p>Загрузка...</p>;
  }

  const handleOpenModal = (contact: IContact) => {
    setSelectedContact(contact);
  };

  const handleCloseModal = () => {
    setSelectedContact(null);
  };

  return (
    <>
      {contacts.length === 0 ? (
        <p>Нет контактов</p>
      ) : (
        <>
          {contacts.map((contact) => (
            <div className="card m-4" key={contact.id}>
              <div className="card-body">
                <h5 className="card-title m-3">Контакт: {contact.name}</h5>
                <button
                  className="btn btn-primary"
                  onClick={() => handleOpenModal(contact)}
                >
                  Информация
                </button>
              </div>
            </div>
          ))}
        </>
      )}

      <Modal contact={selectedContact} onClose={handleCloseModal} />
    </>
  );
};

export default ContactList;
