import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Blog from "./Components/Pages/Blog/Blog";
import Details from "./Components/Pages/Details/Details";
import Home from "./Components/Pages/Home/Home";
import Plyers from "./Components/Pages/Plyers/Plyers";
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/plyers" element={<Plyers/>}/>
        <Route path="/details" element={<Details/>}/>
        <Route path="/blog" element={<Blog/>}/>
      </Routes>
      </div>
  );
}

export default App;
