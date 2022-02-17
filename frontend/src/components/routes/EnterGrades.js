import Navbar from "../utilities/NavBar";
import NavButton from "../utilities/NavButton"
import Grades from "./Grades";

export default function EnterGrades() {

    return (

        <div className="flex flex-col h-max">

            <Navbar />

            <div className="flex flex-col items-center mt-32">
                <Grades />
                <NavButton link="/selectsubjects" name="Back" />
            </div>

        </div>

    );
}