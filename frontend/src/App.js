// import dependencies
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import components
import Navbar from "./components/utilities/NavBar";
import Home from "./components/Home";
import Generate from "./components/Generate";
import { DisplayKUHES } from "./components/display/DisplayKUHES";
import { DisplayUNIMA } from "./components/display/DisplayUNIMA";
import { DisplayMUBAS } from "./components/display/DisplayMUBAS";
import { DisplayMUST } from "./components/display/DisplayMUST";
import { DisplayMZUNI } from "./components/display/DisplayMZUNI";
import { DisplayLUANAR } from "./components/display/DisplayLUANAR";

export default function App() {

    return (

        <div className="flex flex-col h-max">
            
            <BrowserRouter>

                <Navbar />
                <Routes>
                    
                    <Route path="/" element={<Home />} />
                    <Route path="/generate" element={<Generate />} />
                    <Route path="/KUHES" element={<DisplayKUHES />} />
                    <Route path="/UNIMA" element={<DisplayUNIMA />} />
                    <Route path="/MUBAS" element={<DisplayMUBAS />} />
                    <Route path="/MUST" element={<DisplayMUST />} />
                    <Route path="/MZUNI" element={<DisplayMZUNI />} />
                    <Route path="/LUANAR" element={<DisplayLUANAR />} />

                    <Route path="*" element={<h1 className="mt-10 text-center font-semibold text-2xl">There's nothing here!</h1>} />
                </Routes>
            </BrowserRouter>

        </div>

    );


       


}


