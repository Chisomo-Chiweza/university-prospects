import Arrow from "../assets/right-arrow-light.png";

function Pill() {
    
    return(

        <button className="justify-center p-1 px-6 mx-auto mt-10 bg-space border-2 border-white rounded-3xl text-xl font-bold focus:ring-2 focus:ring-blue-500">
            <img src={Arrow} alt="right arrow"></img>
        </button>
        
    );

}

export default Pill;