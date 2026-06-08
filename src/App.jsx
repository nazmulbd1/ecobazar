import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import MainLayouts from "./components/layouts/MainLayouts";
import Faq from "./pages/Faq";
import Category from "./pages/Category";

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayouts/>}>
          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/faq"  element={<Faq/>}/>
          <Route path="/category" element={<Category/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
