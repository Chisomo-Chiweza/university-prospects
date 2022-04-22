// import dependencies
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import components
import Home from "./components/Home";
import Navbar from "./components/utilities/NavBar";

function App() {

    return (

        <div className="flex flex-col h-max">

            <BrowserRouter>

                <Navbar />
                <Routes>
                    
                    <Route exact path="*" element={<Home />} />
                    <Route path="/" element={<h1 className="mt-10 text-center font-semibold text-4xl" src="/assets/Bg.png">Welcome To University Prospects
                    <div className="mt-10 text-xl "> This project is designed to help Malawian individuals apply to University better

                    </div>
                    </h1>} />
                </Routes>

            </BrowserRouter>

            <div className="mt-20 text-center ">
           <button class="border-2 border-yellow-400 px-4 py-2  text-2xl font-bold text-center
           hover:bg-indigo-900 rounded-full hover:text-yellow-400 hover:font-bold">
               Get Started</button>
           </div>

        </div>

    );

}

export default App;
