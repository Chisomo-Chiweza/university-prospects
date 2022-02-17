import Navbar from "../utilities/NavBar";
import NavButton from "../utilities/NavButton"
import Programs from "./Programs";

export default function EnterGrades() {

    return (

        <div className="flex flex-col h-max">

            <Navbar />

            <div className="flex flex-col items-center mt-32">
                <Programs />
                <NavButton link="/entergrades" name="Back" />
            </div>

        </div>

    );
}