import "./App.css";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import NotFound from "./components/NotFound";
import AboutProduct from "./components/Page/AboutProduct";
import AboutUsers from "./components/Page/AboutUsers";
import IndexAbout from "./components/Page/IndexAbout";
import ProductPage from "./components/ProductPage";
import Login from "./components/sign_in/Login";
import Checkout from "./components/sign_in/Checkout";
import Course from "./components/Dynamic/Course";
import CourseDetail from "./components/Dynamic/CourseDetail";
import CourseTypeId from "./components/Dynamic/CourseTypeId";
function App() {
  const activeStyle = ({ isActive }) => ({
    color: isActive ? "pink" : "black",
    backgroundColor: isActive ? "black" : "pink",
  });
  return (
    <div>
      {/** Su dung NavLink */}
      {/** NavLink va Link giong nhau deu dung de ánh xạ đến Route
       * Nhưng khi sử dụng NavLink:NavLink
       * Nhưng khi sử dụng NavLink: thì className sẽ được active
       */}
      <ul>
        <li>
          <NavLink to="/" style={activeStyle}>
            Home Page
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" style={activeStyle}>
            Contact Page
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" style={activeStyle}>
            About Page
          </NavLink>
          <ul>
            <li>
              <NavLink to="/about/aboutProduct" style={activeStyle}>
                About Product
              </NavLink>
            </li>
            <li>
              <NavLink to="/about/aboutUser" style={activeStyle}>
                About Users
              </NavLink>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/checkout">Thanh Toan</Link>
        </li>
      </ul>
      <ProductPage />
      {/** Su dung Link */}
      {/* <ul>
        <li>
          <Link to="/">Home Page</Link>
        </li>
        <li>
          <Link to="/contact">Contact Page</Link>
        </li>
        <li>
          <Link to="/about">About Page</Link>
          <ul>
            <li>
              <Link to="/about/aboutProduct">About Product</Link>
            </li>
            <li>
              <Link to="/about/aboutUser">About Users</Link>
            </li>
          </ul>
        </li>
      </ul> */}
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
        <Route path="/about" element={<AboutPage />}>
          {/** Router index cua About */}
          <Route index element={<IndexAbout />}></Route>

          {/** Nested Router route dinh tuyen long nhau */}
          <Route path="aboutProduct" element={<AboutProduct />}></Route>
          <Route path="aboutUser" element={<AboutUsers />}></Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        {/* Dynamic Router */}
        <Route path="/course" element={<Course />}></Route>
        <Route path="/course/:id" element={<CourseDetail />}></Route>
        <Route path="/course/:type/:id" element={<CourseTypeId />}></Route>

        {/* Luu ys: De routert co path="*" de cuoi cung */}
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
