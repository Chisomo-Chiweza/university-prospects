// import dependencies
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Component } from "react";

// Import components
import Navbar from "./components/utilities/NavBar";
import Home from "./components/Home";
import Generate from "./components/Generate";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {

            programmes: [],
            KUHES: [],
            UNIMA: [],
            MUBAS: [],
            MUST: [],
            MZUNI: [],
            LUANAR: [],

        }

        this.setProgrammes = this.setProgrammes.bind(this);

    }

    setProgrammes(recommendedProgrammes) {

        let { programmes } = this.state;
        programmes = recommendedProgrammes;
        this.setState({ programmes: programmes });
    
    
    }

    render() {

        return (

            <div className="flex flex-col h-max">
    
                <BrowserRouter>
    
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/generate" element={<Generate sendProgrammes={ this.setProgrammes }/>} />
                        <Route path="*" element={<h1 className="mt-10 text-center font-semibold text-2xl">There's nothing here!</h1>} />
                    </Routes>
    
                </BrowserRouter>
    
            </div>
    
    
    
        );

    }

    

}

export default App;
