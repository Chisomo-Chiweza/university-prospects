// import dependencies
import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";

// Import components
import Home from "./components/Home";
import Contacts from "./components/Contacts.js";
import About from "./components/About";
import Navbar from "./components/utilities/NavBar";

function App() {

    return (

        <div className="flex flex-col h-max">

            <BrowserRouter>

                <Navbar />
                <Routes>
                    <Route exact path="*" element={<Home />} />
                    <Route exact path="/" element={<h1 className="mt-10 text-center font-semibold text-2xl">Welcome To University Prospects</h1>} />
                    <Route exact path="/contacts" element={<Contacts />} />
                    <Route exact path="/about" element={<About />} />

                </Routes>
               
            </BrowserRouter>
           <div className="mt-20 text-center ">
           <button class="border- border-yellow-400 px-4 py-2  text-2xl font-bold text-center
           hover:bg-indigo-900 rounded-full hover:text-yellow-400 hover:font-bold">
               Get Started</button>
           </div>
        </div>
    


    );

}

export default App;
