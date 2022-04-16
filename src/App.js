import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Login from "./Components/Login/Login";
import Blog from "./Components/Pages/Blog/Blog";
import Details from "./Components/Pages/Details/Details";
import Home from "./Components/Pages/Home/Home";
import Plyers from "./Components/Pages/Plyers/Plyers";
import Register from "./Components/Register/Register";
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/plyers/:id" element={<Plyers/>}/>
        <Route path="/details" element={<Details/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      <Footer></Footer>
      <Toaster/>
      </div>
  );
}

export default App;
