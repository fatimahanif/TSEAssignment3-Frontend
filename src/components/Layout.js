import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Login from "./Login";

const Layout = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Layout;
