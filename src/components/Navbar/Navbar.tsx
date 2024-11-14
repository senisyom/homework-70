import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
      <div className="container-sm">
        <NavLink to="/">
          <span className="navbar-brand">Contacts</span>
        </NavLink>

        <ul className="navbar-nav mr-auto flex-row gap-2 flex-nowrap">
          <li className="nav-item">
            <NavLink to="/add-new-contact" className="nav-link">
              Add new contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
