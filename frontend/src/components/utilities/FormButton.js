import Arrow from '../assets/right-arrow-light.png';

function FormButton() {

    return(

        <button className=" flex flex-row justify-center gap-3 mt-6 px-2 p-1 float-right bg-space text-white text-base rounded drop-shadow-xl hover:-translate-y-0.5 hover:scale-110 duration-150">
            Next <span><img src={Arrow} alt="right arrow" className="object-none"></img></span>
        </button>
        
    );

}

export default FormButton;