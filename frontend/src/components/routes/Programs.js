import React from "react";
import Card from "../utilities/Card";
import Container from "../utilities/Container";

class Programs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            programs: [
                {
                    name: "Bachelor of Science in Computer Science",
                    university: "University of Malawi",
                    code: "UNIMA",
                    isSelected: false,
                },
                {
                    name: "Bachelor of Science in Geology",
                    university: "University of Malawi",
                    code: "UNIMA",
                    isSelected: false,
                },
                {
                    name: "Bachelor of Science in Geology",
                    university: "University of Malawi",
                    code: "UNIMA",
                    isSelected: false,
                },
                {
                    name: "Bachelor of Engineering in Civil Engineering",
                    university: "Malawi University of Business and Applied Sciences",
                    code: "MUBAS",
                    isSelected: false,
                },
                {
                    name: "Bachelor of Medicine in Physiotherapy",
                    university: "Kamuzu University of Health Sciences",
                    code: "KUHES",
                    isSelected: false,
                },
                {
                    name: "Bachelor of Engineering in Water Engineering",
                    university: "Malawi University of Business and Applied Sciences",
                    code: "MUBAS",
                    isSelected: false,
                },
            ],
        };


    }

    render() {
        return (

            <Container>

                <h1 className="font-semibold text-2xl text-jonquil mb-8">The top six programs you are most eligible for include: </h1>

                <div className="mx-auto p-6 bg-ivory border rounded drop-shadow-md">

                    {this.state.programs.map((programs) => (
                        <div className="mb-4">

                            <Card>
                                <h1 className="font-semibold text-jonquil text-xl">{programs.name}</h1>
                                <p className="text-space text-lg">{programs.university}</p>
                            </Card>

                        </div>
                    ))}

                </div >



            </Container>

        );
    }
}

export default Programs;