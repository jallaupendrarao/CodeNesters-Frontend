import { Route, Routes } from "react-router-dom";
import "./App.css";

//! Pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";

import { Toaster } from "react-hot-toast";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Private from "./components/Routes/Private";
import Profile from "./pages/User/Profile";
import MyCourses from "./pages/User/MyCourses";
import Settings from "./pages/User/Settings";
import PageNotFound from "./pages/PageNotFound";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Blogs from "./pages/Blogs";

function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/blogs" element={<Blogs />} />
        
        {/* //! Protected Routes for Users  */}
        <Route path="/dashboard" element={<Private />}>
          <Route path="user/profile" element={<Profile />} />
          <Route path="user/courses" element={<MyCourses />} />
          <Route path="user/settings" element={<Settings />} />
        </Route>
        a
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
