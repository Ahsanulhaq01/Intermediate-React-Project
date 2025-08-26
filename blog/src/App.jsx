import Navbar from "./Navabar/Navbar";
import Posts from "./pages/posts/Posts";
import { Routes, Route } from "react-router";
import Homepage from "./pages/homepage/Homepage";
import ContactPage from "./pages/contactpage/ContactPage";
function App() {
  return (
    <>
      <Routes>
        <Route index element={<Homepage />}></Route>
        <Route path="post" element={<Posts />}></Route>
        <Route path="contact" element={<ContactPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
