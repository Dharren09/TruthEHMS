import Home from "../pages/Home"
import Contact from "../pages/Contact"
import Login from "../pages/Login"
import Services from "../pages/Services"
import Doctors from "../pages/Doctors/Doctors"
import DoctorsDetails from "../pages/Doctors/DoctorsDetails"
import Signup from "../pages/Signup"
import Products from "../pages/otherProducts"

import { Routes, Route} from "react-router-dom"

const Routers = () => {
    return <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/services" element={<Services />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:id" element={<DoctorsDetails />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/otherProducts" element={<Products />} />
    </Routes>
};

export default Routers;