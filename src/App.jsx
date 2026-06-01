import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import SingleProject from "./pages/SingleProject";
import News from "./pages/News";
import Blog from "./pages/Blog";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import Category from "./pages/Category";
import ServiceCategory from "./pages/ServiceCategory";
import Forbidden from "./pages/Forbidden";

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
          <Route path="/projects/:id" element={<SingleProject />} />
          <Route path="/news" element={<News />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/category" element={<Category />} />
          <Route path="/services/category/:id" element={<ServiceCategory />} />
          <Route path="/*" element={<Forbidden />} />
        </Route>

        {/* Routes outside the layout */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

export default App;
