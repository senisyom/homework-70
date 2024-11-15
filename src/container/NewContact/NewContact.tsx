import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { createContact } from "../../thunk";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NewContact = () => {
  const dispatch = useAppDispatch();

  const [contact, setContact] = useState({
    name: "",
    number: "",
    email: "",
    picture: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target as HTMLInputElement;
    setContact((prevContact) => ({
      ...prevContact,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const newContact = {
      ...contact,
      id: Date.now().toString(),
    };

    try {
      await dispatch(createContact(newContact));
      toast.success("Контакт успешно добавлен");

      setContact({
        name: "",
        number: "",
        email: "",
        picture: "",
      });
    } catch {
      toast.error("Ошибка при добавлении контакта");
    }
  };

  return (
    <div>
      <div className="container w-50 mx-auto mt-4">
        <h2 className="mb-4">Добавить новый контакт</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-floating mb-4">
            <input
              type="text"
              className="form-control"
              placeholder="Имя"
              name="name"
              value={contact.name}
              onChange={handleChange}
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
              onChange={handleChange}
              required
            />
            <label>Телефон</label>
          </div>
          <div className="form-floating mb-4">
            <input
              type="text"
              className="form-control"
              value={contact.email}
              onChange={handleChange}
              placeholder="Почта"
              name="email"
            />
            <label>Почта</label>
          </div>
          <div className="form-floating mb-4">
            <input
              type="text"
              className="form-control"
              placeholder="Фото (ссылка)"
              name="picture"
              value={contact.picture}
              onChange={handleChange}
            />
            <label>Фото</label>
          </div>
          <button type="submit" className="btn btn-primary">
            Сохранить
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
