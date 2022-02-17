import React from "react";
import Container from "../utilities/Container";
import NextButton from "../utilities/NextButton";

class Grades extends React.Component {
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
                            Enter in the grades you got for your six subjects
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

                                <label className="text-base" for={subject.id}>
                                    {subject.name}
                                </label>
                                <input
                                    type="text"
                                    id={subject.id}
                                    className="ml-4 h-4 w-10 rounded-sm bg-none border-b border-space"
                                />

                            </div>

                        ))}

                    </form>

                    <div className="flex flex-row-reverse">

                        <NextButton link="/displayPrograms" />

                    </div>

                </div>

            </Container>

        );
    }
}

export default Grades;