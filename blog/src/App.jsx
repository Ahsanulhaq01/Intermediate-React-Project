import Posts from "./pages/posts/Posts";
import Post from "./pages/post/Post";
import { Routes, Route } from "react-router";
import Homepage from "./pages/homepage/Homepage";
import ContactPage from "./pages/contactpage/ContactPage";
function App() {
  return (
    <>
      <Routes>
        <Route index element={<Homepage />}></Route>
        <Route path="posts" element={<Posts />}></Route>
        <Route path="contact" element={<ContactPage />}></Route>
        <Route path="post/:id" element={<Post/>}></Route>
      </Routes>
    </>
  );
}

export default App;
