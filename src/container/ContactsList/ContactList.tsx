import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getContact, deleteContact } from "../../thunk";
import { selectContacts, selectFetchLoading } from "../../slice";
import Modal from "../../components/Modal/Modal";
import { IContact } from "../../types";
import { toast } from "react-toastify";

const ContactList = () => {
  const dispatch = useAppDispatch();
  const contacts = useAppSelector(selectContacts);
  const loading = useAppSelector(selectFetchLoading);

  const [selectedContact, setSelectedContact] = useState<IContact | null>(null);

  useEffect(() => {
    if (contacts.length === 0) {
      dispatch(getContact());
    }
  }, [contacts.length, dispatch]);


  if (loading) {
    return <p>Загрузка</p>;
  }

  const onOpenModal = (contact: IContact) => {
    setSelectedContact(contact);
  };

  const handleCloseModal = () => {
    setSelectedContact(null);
  };

  const onDeleteContact = (id: string) => {
    dispatch(deleteContact(id))
      .then(() => {

        setSelectedContact(null);
      })
      .catch((error) => {
        console.error("Ошибка удаления:", error);
        toast.error("Ошибка удаления.");
      });
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
                <a href="">
                  <h5
                    className="card-title m-3"
                    onClick={(e) => {
                      e.preventDefault();
                      onOpenModal(contact);
                    }}
                  >
                    Контакт: {contact.name}
                  </h5>
                </a>
              </div>
            </div>
          ))}
        </>
      )}

      <Modal
        contact={selectedContact}
        onClose={handleCloseModal}
        onDelete={onDeleteContact}
      />
    </>
  );
};

export default ContactList;
