import React,{useState} from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
// import Dashboard from "./pages/Dashboard";
import HomeC from "./components/HomeC";
import Navbar from "./components/Navbar";
import AdminLogIn from "./pages/AdminLogin";
import DashPage from "./pages/DashPage";
import UserLogin from "./pages/User/UserLogin";
import Signup from "./pages/User/UserSignup";
// import HomePage from "./pages/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Rechargeplan from "./pages/Recharge";
import Admin from "./pages/Admin/Admin";
import Footer from "./components/Footer";

const App = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  console.log(formData, "tis is email data");
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/adlog"
            element={<Login formData={formData} setFormData={setFormData} />}
          />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<DashPage newData={formData} />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/adminlogin" element={<AdminLogIn />} />
          <Route path="/" element={<HomeC />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/recharge" element={<Rechargeplan />} />
          {/* <Route path="/homep" element={<HomePage />} /> */}
           </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;