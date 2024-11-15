import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import AddNewContact from "./container/NewContact/NewContact";

const App = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route path="/add-new-contact" element={<AddNewContact />} />
      </Routes>
    </>
  );
};

export default App;
