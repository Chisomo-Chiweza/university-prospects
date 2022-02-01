
function NavBar(props) {

    return(

        <div className="flex mx-4 mt-4 mb-0">
            <img src={props.arrow} alt="left arrow" className="object-scale-down object-top flex-initial"></img>
            <img src={props.logo} alt="Logo" className="object-scale-down h-52 object-top flex-1"></img> 
        </div>
        
    );
}

export default NavBar;