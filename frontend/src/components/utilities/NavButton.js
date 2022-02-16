import { Link } from "react-router-dom";
import Logo from "../../assets/left-arrow.png";

export default function NavButton(props) {

    return(
        
        <Link to={ props.link } className="flex items-center py-4 px-2">
            <img src={Logo} alt="left arrow" className="mr-2 w-8" />
            <span className="text-xl font-semibold text-gray-400">{ props.name }</span>
        </Link>
    );
}