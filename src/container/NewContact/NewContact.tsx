import React, { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { createContact } from "../../thunk";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import { selectContacts } from "../../slice";
import { useEffect } from "react";

const NewContact = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const contacts = useSelector(selectContacts)

  const [contact, setContact] = useState({
    name: "",
    number: "",
    email: "",
    picture: "",
  });

   useEffect(() => {
     if (id) {
       const contactToEdit = contacts.find((contact) => contact.id === id);
       if (contactToEdit) {
         setContact(contactToEdit);
       }
     }
   }, [id, contacts]);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target as HTMLInputElement;
    setContact((prevContact) => ({
      ...prevContact,
      [name]: value,
    }));
  };

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const newContact = {
      ...contact,
      id: Date.now().toString(),
    };

    try {
      await dispatch(createContact(newContact));
      toast.success("Добавлено");

      setContact({
        name: "",
        number: "",
        email: "",
        picture: "",
      });
      navigate("/");
    } catch {
      toast.error("Ошибка");
    }
  };

  return (
    <div>
      <div className="container w-50 mx-auto mt-4">
        <h2 className="mb-4">
          {id ? "Редактировать контакт" : "Добавить новый контакт"}
        </h2>
        <form onSubmit={onSubmit}>
          <div className="form-floating mb-4">
            <input
              type="text"
              className="form-control"
              placeholder="Имя"
              name="name"
              value={contact.name}
              onChange={onChange}
              required
            />
            <label>Имя</label>
          </div>
          <div className="form-floating mb-4">
            <input
              type="text"
              className="form-control"
              placeholder="Телефон"
              name="number"
              value={contact.number}
              onChange={onChange}
              required
            />
            <label>Телефон</label>
          </div>
          <div className="form-floating mb-4">
            <input
              type="text"
              className="form-control"
              value={contact.email}
              onChange={onChange}
              placeholder="Почта"
              name="email"
            />
            <label>Почта</label>
          </div>
          <div className="form-floating mb-4">
            <input
              type="text"
              className="form-control"
              placeholder=""
              name="picture"
              value={contact.picture}
              onChange={onChange}
            />
            <label>Фото</label>
          </div>
          <button type="submit" className="btn btn-primary">
            {id ? "Сохранить изменения" : "Сохранить"}
          </button>
          <NavLink to="/">
            <button type="button" className="btn btn-primary ms-3">
              Вернуться к контактам
            </button>
          </NavLink>
        </form>
      </div>
    </div>
  );
};

export default NewContact;
