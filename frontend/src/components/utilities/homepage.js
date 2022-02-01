import logo from "../assets/logo.png";

function Homepage(props) {

    return(
        <div className="h-screen w-screen flex flex-col bg-space">

            <div className="flex flex-row mt-10 justify-center">
                <img src={logo} alt="Logo" className="object-scale-down object-top"></img>
            </div>

            <div className="flex flex-row justify-center">
                {props.content}
            </div>

        </div>
    );
}

export default Homepage;