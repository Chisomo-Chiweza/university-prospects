import NavArrow from "../assets/left-arrow-yellow.png";
import logo from "../assets/logo.png";
import NavBar from "./navbar";

function Darkpage(props) {

    return(
        <div className="h-screen w-screen flex flex-col bg-space">

            <NavBar arrow={NavArrow} logo={logo}/>

            <div className="flex flex-row justify-center bg-ivory p-6 rounded-lg mx-auto">
                {props.content}
            </div>

        </div>
    );
}

export default Darkpage;