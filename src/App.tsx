import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import AddNewContact from "./container/NewContact/NewContact";
import ContactList from "./container/ContactsList/ContactList";


const App = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="container-sm mt-4">
        <Routes>
          <Route path="/" element={<ContactList />} />
          <Route path="/add-new-contact" element={<AddNewContact />} />
          <Route path="/add-new-contact/:id" element={<AddNewContact />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
