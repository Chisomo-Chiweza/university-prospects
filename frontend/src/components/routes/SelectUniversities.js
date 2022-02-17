import Navbar from "../utilities/NavBar";
import NavButton from "../utilities/NavButton";
import Universities from "./Universities";

export default function SelectUniversities() {

    return (

        <div className="flex flex-col h-max">

            <Navbar />

            <div className="flex flex-col items-center mt-32">

                <Universities />
                <NavButton link="/stepone" name="Back" />

            </div>

        </div>

    );
}