import "./App.css";
import Form from "./Components/Form";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Register from "./Components/Register/Register";
import { createContext, useState } from "react";

export const Formdata = createContext();

function App() {

  const [formdatas, setFormdatas] = useState([]);

  console.log(formdatas);

  return (
    <div className="App">
      {/* <Form /> */}
      <Formdata.Provider value={{ formdatas, setFormdatas }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </Formdata.Provider>
    </div>
  );
}

export default App;
