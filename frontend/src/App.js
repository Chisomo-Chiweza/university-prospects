// import dependencies
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import components
import Navbar from "./components/utilities/NavBar";
import Home from "./components/Home";
import Generate from "./components/Generate";
import { DisplayKUHES } from "./components/display/DisplayKUHES";
import { DisplayUNIMA } from "./components/display/DisplayUNIMA";
import Contacts from "./components/Contacts";
import About from "./components/About";

export default function App() {

    return (

        <div className="flex flex-col h-max">
            
            <BrowserRouter>

                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/generate" element={<Generate />} />
                    <Route exact path="/KUHES" element={<DisplayKUHES />} />
                    <Route exact path="/UNIMA" element={<DisplayUNIMA />} />
                    <Route exact path="/contacts" element={<Contacts/>} />
                    <Route exact path="/about" element={<About/>} />
                </Routes>
            </BrowserRouter>

        </div>

    );


       


}


