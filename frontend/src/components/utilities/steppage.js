import NavArrow from "../assets/left-arrow-yellow.png";
import logo from "../assets/logo.png";
import NavBar from "./navbar";
import Pill from "./pill";

function StepPage(props) {

    return(
        <div className="h-screen w-screen flex flex-col bg-space">

            <NavBar arrow={NavArrow} logo={logo}/>

            <div className="flex flex-col justify-center bg-ivory p-6 px-20 rounded-lg mx-auto">
                <h1 className="font-bold text-4xl text-black text-center mb-4">Step {props.number}</h1>
                <p className="text-2xl w-56 text-black text-center">{props.content}</p>
                <Pill />
            </div>

        </div>
    );
}

export default StepPage;