import Container from "../utilities/Container";
import NextButton from "../utilities/NextButton";
import NavBar from "../utilities/NavBar";
import NavButton from "../utilities/NavButton";

export default function StepTwo() {

    return (

        <div className="flex flex-col h-max">

            <NavBar />

            <div className="flex flex-col items-center mt-32">

                <Container>

                    <h1 className="text-2xl font-semibold text-white">Step Two</h1>
                    <p className="text-lg text-white">
                        Select your top six subjects.
                    </p>
                    <NextButton link="/selectcurriculum" />

                </Container>

                <NavButton link="/selectfaculties" name="Back" />

            </div>

        </div>


    );

}