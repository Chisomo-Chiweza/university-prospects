import React,{useState} from 'react'
import logo from "../assets/logo.png";
import Results from '../views/results/results';

function Homepage(props) {
      const[state, setState] = useState({
        programs:[
            {
                name:"Bachelor of Pharmacy",
                Faculty:"Faculty of Biomedical Science and Health Professions",
                university:"Kamuzu university of Health science"
            },
            {
                name:"Bachelor of Education (Computer Science)",
                Faculty:"Fulcuty of Education",
                university:"University of Malawi Fomally known as Chancellor College"
            },
            {
                name:"Bachelor of Engineering Biomedical Engineering (Honours)",
                Faculty:"Fulcuty of Malawi Institute of Technology (MIT)",
                university:"The Malawi University of Science and Technology"
            },
            {
                name:"Bachelor of Science in Food Science and Technology",
                Faculty:"Fulcuty of food and Human Science",
                university:" Lilongwe University of Agriculture and Natural Resources"
            },
            {
                name:"Bachelor of scince/Bachelor of Surgery",
                Faculty:"Fulcuty of medicice",
                university:"Kamuzu university of Health science"
            }
        ]  
      })

      console.log(state.programs)
     
    return(
        <div className="h-screen w-screen flex flex-col bg-space">

            <div className="flex flex-row mt-10 justify-center">
                <img src={logo} alt="Logo" className="object-scale-down object-top"></img>
            </div>
            <div className="text-ivory text-4xl font-bold place-self-center w-2/4 ">The top six programme choices that best fit your current academic perfomance inclue:</div>
            <div className=" w-3/6 bg-ivory place-self-center">
                
                 <Results/>
            </div>

        </div>
    );
}

export default Homepage;