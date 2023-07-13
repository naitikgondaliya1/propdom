import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import CustomerService from "../Pages/CustomerService";
import Plans from "../Pages/Plans";
import Demo from "../Pages/Demo";
import Footer from "../Component/Footer";
import Filter from "../Pages/Filter";
import Subpro from "../Pages/Subpro";
import PageNotFound from "../Pages/PageNotFound";
// import ImageSlider from "../Pages/ImageSlider";

function Layout() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/customerService" element={<CustomerService />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/Filter" element={<Filter />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/Subpro" element={<Subpro />} />
        {/* <Route path="/ImageSlider" element={<ImageSlider />} /> */}

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Layout;
