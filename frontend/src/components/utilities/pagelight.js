import NavArrow from "../assets/left-arrow-blue.png";
import logo from "../assets/logo-dark.png";
import NavBar from "./navbar";


function Lightpage(props) {

    return(
        <div className="h-screen w-screen flex flex-col bg-white">

            <NavBar arrow={NavArrow} logo={logo}/>

            <div className="flex flex-row justify-center bg-ivory p-10 rounded-lg mx-auto">
                {props.content}
            </div>

        </div>
    );
}

export default Lightpage;