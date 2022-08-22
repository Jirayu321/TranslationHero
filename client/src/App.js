import * as React from "react";
import Freelance from "./Component/Dashboard/Dashboard_freelance";
import Employee from "./Component/Dashboard/Dashboard_employee";
import Company from "./Component/Dashboard/Dashboard_company";
import Home from "./Component/Home/Home";
import Customer from "./Component/Home/Customer";
import Translator from "./Component/Home/Translator";
import Home2 from "./Component/Home/Home2";
import Login from "./Component/Login/Login";
import ForgetPassword from "./Component/Login/ForgetPassword";
import CreateNewPassword from "./Component/Login/CreateNewPassword";
import Signup from "./Component/Sign_up/Signup";
import Signupfreelance from "./Component/Sign_up/Signup_freelance";
import Signupcompany from "./Component/Sign_up/Signup_company";
import Chat from "./Component/Chat/Chat";
import Order from "./Component/Order/Order";
import { StyledEngineProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <div className="App-body">
            <StyledEngineProvider injectFirst>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/Home/Services/Customer" element={<Customer />} />
                <Route exact path="/Home/Services/Translator" element={<Translator />} />
                <Route exact path="/Login" element={<Login />} />
                <Route exact path="/ForgetPassword" element={<ForgetPassword />} />
                <Route exact path="/CreateNewPassword" element={<CreateNewPassword />} />
                <Route exact path="/Signup" element={<Signup />} />
                <Route path="/Signup_freelance" element={<Signupfreelance />} />
                <Route
                  exact
                  path="/Signup_company"
                  element={<Signupcompany />}
                />
                <Route exact path="/In" element={<Home2 />} />
                <Route exact path="/In/Order" element={<Order />} />
                <Route
                  exact
                  path="/Dashboard_freelance"
                  element={<Freelance />}
                />
                <Route
                  exact
                  path="/Dashboard_employee"
                  element={<Employee />}
                />
                <Route exact path="/Dashboard_company" element={<Company />} />
                <Route exact path="/Chat" element={<Chat />} />
              </Routes>
            </StyledEngineProvider>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
