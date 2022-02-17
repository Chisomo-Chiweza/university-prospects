import Navbar from "../utilities/NavBar";
import Subjects from "./Subjects";
import NavButton from "../utilities/NavButton"

export default function SelectSubjects() {

    return (

        <div className="flex flex-col h-max">

            <Navbar />

            <div className="flex flex-col items-center mt-32">
                <Subjects />
                <NavButton link="/selectcurriculum" name="Back" />
            </div>

        </div>

    );
}