import { Link } from "react-router-dom";
import Logo from "../../assets/right-arrow.png";

export default function NextButton(props) {

    return (

        <Link to={props.link}>

            <button className="mx-auto px-4 bg-white border rounded drop-shadow-sm mt-4">
                <img src={Logo} alt="right arrow" className="w-8" />
            </button>

        </Link>

    );
}