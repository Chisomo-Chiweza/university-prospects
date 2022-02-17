import MainButton from "../utilities/MainButton";
import NavBar from "../utilities/NavBar";

export default function Home() {

    return (

        <div className="flex flex-col h-max">

            <NavBar />

            <div className="flex flex-col items-center mt-32">

                <div className="flex flex-col items-center">

                    <div className="mx-auto pb-8">

                        <h1 className="text-center font-bold text-4xl md:text-7xl text-space">
                            University <span className="text-jonquil">Prospects</span>
                        </h1>
                        <p className="text-center font-semibold text-lg md:text-2xl text-space">
                            is designed to help Malawian individuals apply to
                            university better.
                        </p>

                    </div>

                    <MainButton link="/stepone" />

                </div>
            </div>

        </div>



    );
}