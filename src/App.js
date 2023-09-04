import React from "react";
import CustomerForm from "./components/CustomerForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DisplayData from "./components/DisplayData";
import CustomerDetailsEdit from "./components/CustomerDetailsEdit";

function App() {
  return (
    <>
      <div className="container ">
        <div className="d-flex justify-content-center ">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<CustomerForm />} />
              <Route path="/page" element={<DisplayData />}></Route>
              <Route path="edit/:id" element={<CustomerDetailsEdit />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;
