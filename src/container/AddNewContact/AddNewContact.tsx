import { NavLink } from "react-router-dom";

const AddNewContact = () => {
  return (
    <div>
      <div className="container w-50 mx-auto mt-4">
        <h2 className="mb-4">Добавить новый контакт</h2>
        <form>
          <div className="form-floating mb-4">
            <input
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea"
              name="title"
            ></input>
            <label htmlFor="floatingTextarea">Имя</label>
          </div>
          <div className="form-floating mb-4">
            <input
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea"
              name="title"
            ></input>
            <label htmlFor="floatingTextarea">Телефон</label>
          </div>
          <div className="form-floating mb-4">
            <input
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea"
              name="title"
            ></input>
            <label htmlFor="floatingTextarea">Почта</label>
          </div>
          <div className="form-floating mb-4">
            <input
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea"
              name="title"
            ></input>
            <label htmlFor="floatingTextarea">Фото</label>
          </div>
          <button type="submit" className="btn btn-primary">
            Сохранить
          </button>
          <NavLink to="/">
            <button type="submit" className="btn btn-primary ms-3">
              Вернуться к контактам
            </button>
          </NavLink>
        </form>
      </div>
    </div>
  );
};

export default AddNewContact;
