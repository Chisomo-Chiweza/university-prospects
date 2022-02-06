import Arrow from '../assets/right-arrow-dark.png';

function HomeButton() {

    return(

        <button className="flex flex-row gap-4 justify-center p-3 px-8 mx-auto bg-ivory rounded-md text-space text-xl font-bold hover:-translate-y-0.5 hover:scale-110 duration-100">
            Get Started <img src={Arrow} alt="right arrow"></img>
        </button>

    );

}

export default HomeButton;