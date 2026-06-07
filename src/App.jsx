import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import MainLayouts from "./components/layouts/MainLayouts";
import Faq from "./pages/Faq";

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayouts/>}>
          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/faq"  element={<Faq/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
