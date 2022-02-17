import React from "react";
import Container from "../utilities/Container";
import NextButton from "../utilities/NextButton";

class Subjects extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            subjects: [
                {
                    name: "English Language",
                    id: "1",
                    isSelected: false,
                },
                {
                    name: "English Literature",
                    id: "2",
                    isSelected: false,
                },
                {
                    name: "Creative Arts",
                    id: "3",
                    isSelected: false,
                },
                {
                    name: "Bible Knowledge",
                    id: "4",
                    isSelected: false,
                },
                {
                    name: "Geography",
                    id: "5",
                    isSelected: false,
                },
                {
                    name: "Physics",
                    id: "6",
                    isSelected: false,
                },
                {
                    name: "Biology",
                    id: "7",
                    isSelected: false,
                },
                {
                    name: "Chemistry",
                    id: "8",
                    isSelected: false,
                },

                {
                    name: "Mathematics",
                    id: "9",
                    isSelected: false,
                },
                {
                    name: "Economics",
                    id: "10",
                    isSelected: false,
                },
                {
                    name: "Accounting",
                    id: "11",
                    isSelected: false,
                },
                {
                    name: "Business Studies",
                    id: "12",
                    isSelected: false,
                },
                
            ],

            selectedSubject: [],
        };

        this.selectAll = this.selectAll.bind(this);

    }

    selectAll(event) {
        let selectedFaculties = this.state.faculties;
        selectedFaculties.forEach(
            (selectedFaculty) =>
                (selectedFaculty.isSelected = event.target.checked)
        );
        this.setState({ faculties: selectedFaculties });
    }

    render() {
        return (
            
            <Container>

                <div className="mx-auto p-6 bg-ivory border rounded drop-shadow-md">

                    <form className="flow-root w-auto p-2">
                        <p className="mb-3 text-xl font-semibold">
                            Choose your top six subjects (Select all that apply)
                        </p>

                        {/* <div className="mb-1">
                            <input
                                type="checkbox"
                                id="all"
                                className="mr-2 h-3 w-3 rounded-sm accent-space"
                                onClick={this.selectAll}
                            />
                            <label className="text-base font-semibold" for="all">
                                Select all
                            </label>
                        </div> */}

                        {this.state.subjects.map((subject) => (

                            <div className="mb-1">
                                <input
                                    type="checkbox"
                                    id={subject.id}
                                    className="mr-2 h-3 w-3 rounded-sm accent-space"
                                />
                                <label className="text-base" for={subject.id}>
                                    {subject.name}
                                </label>
                            </div>

                        ))}

                    </form>

                    <div className="flex flex-row-reverse">

                        <NextButton link="/entergrades" />

                    </div>

                </div>

            </Container>

        );
    }
}

export default Subjects;