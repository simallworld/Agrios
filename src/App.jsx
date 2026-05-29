import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import News from "./pages/News";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Register from "./pages/Register";

const App = () => {
  return (
    <>
      <Routes>
        {/* Layout Route */}
        <Route element={<MainLayout />} >
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/news" element={<News />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        {/* Routes outside the layout */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

export default App;
