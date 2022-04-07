import { Link } from "react-router-dom";

export default function MainButton(props) {

    return (

        <Link to="/enter-grades">

            <button className="mx-auto px-4 py-2 bg-space border rounded drop-shadow-sm font-semibold text-white text-base md:text-xl">
                Get Started
            </button>

        </Link>

    );
    
}