// import dependencies
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import components
import Home from "./components/Home";
import Navbar from "./components/utilities/NavBar";
import EnterGrades from "./components/EnterGrades";

function App() {

    return (

        <div className="flex flex-col h-max">

            <BrowserRouter>

                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/enter-grades" element={<EnterGrades />} />
                    <Route path="*" element={<h1 className="mt-10 text-center font-semibold text-2xl">There's nothing here!</h1>} />
                </Routes>

            </BrowserRouter>

        </div>



    );

}

export default App;
