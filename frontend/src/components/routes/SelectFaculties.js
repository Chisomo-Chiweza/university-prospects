import Navbar from "../utilities/NavBar";
import Faculties from "./Faculties";
import NavButton from "../utilities/NavButton"

export default function SelectFaculties() {

    return (

        <div className="flex flex-col h-max">

            <Navbar />

            <div className="flex flex-col items-center mt-32">

                <Faculties />
                <NavButton link="/selectuniversities" name="Back" />

            </div>

        </div>

    );
}