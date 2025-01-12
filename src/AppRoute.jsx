import { Routes, Route } from "react-router-dom";
// COMPONENT AppRoute
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Portfolio from "./Pages/Portfolio";
import Service from "./Pages/Service";
import Privacy_Policy from "./Components/Privacy_Policy";
import Terms_Conditions from "./Components/Terms_Conditions";
import Info_404 from "./Components/Info_404";

const AppRoute = () => {
    return(
        <Routes>
            {/* COMPONENT AppRoute */}
            <Route path="/" element={<Home/>}/>
            <Route path="/" element={<Navbar/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Blog" element={<Blog/>}/>
            <Route path="/Service" element={<Service/>}/>
            <Route path="/Portfolio" element={<Portfolio/>}/>
            <Route path="/Contact" element={<Contact/>}/>     
            <Route path="/Privacy_Policy" element={<Privacy_Policy/>}/>     
            <Route path="/Terms_Conditions" element={<Terms_Conditions/>}/>   
            <Route path="*" element={<Info_404/>}/>
        </Routes>
    )
};
export default AppRoute