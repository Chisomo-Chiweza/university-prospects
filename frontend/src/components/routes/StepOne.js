import Container from "../utilities/Container";
import NextButton from "../utilities/NextButton";
import NavBar from "../utilities/NavBar";

export default function StepOne() {

    return (

        <div className="flex flex-col h-max">

            <NavBar />

            <div className="flex flex-col items-center mt-32">

                <Container>

                    <h1 className="text-2xl font-semibold text-white">Step One</h1>
                    <p className="text-lg text-white">
                        Select the universities you are interested in.
                    </p>
                    <NextButton link="/selectuniversities" />

                </Container>

            </div>

        </div>


    );

}