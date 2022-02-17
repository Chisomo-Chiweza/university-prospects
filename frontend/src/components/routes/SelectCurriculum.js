import Container from "../utilities/Container";
import { Link } from "react-router-dom";
import NavBar from "../utilities/NavBar";
import Card from "../utilities/Card";
import NavButton from "../utilities/NavButton";

export default function SelectCurriculum() {

    return (

        <div className="flex flex-col h-max">

            <NavBar />

            <div className="flex flex-col items-center mt-32">

                <Container>

                    <div className="mx-auto p-6 bg-ivory border rounded drop-shadow-md">

                        <h1 className="text-xl font-semibold text-space">
                            Select the curriculum you studied for
                        </h1>

                        <div className="mt-8">

                            <Link to="/selectsubjects">
                                <Card>
                                    <h1 className="text-xl font-semibold text-space text-center">MSCE</h1>
                                </Card>
                            </Link>

                            <Link to="/selectsubjects">
                                <Card>
                                    <h1 className="text-xl font-semibold text-space text-center">IGCSE</h1>
                                </Card>
                            </Link>

                        </div>

                    </div>

                </Container>

                <NavButton link="/steptwo" name="Back" />

            </div>

        </div>


    );

}