import "./App.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { UserContextProvider } from "./UserContext";
import CreatePost from "./pages/CreatePost";
import SinglePost from "./pages/SinglePost";

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/post/:id" element={<SinglePost />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
