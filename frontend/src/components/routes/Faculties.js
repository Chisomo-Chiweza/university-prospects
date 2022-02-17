import React from "react";
import Container from "../utilities/Container";
import NextButton from "../utilities/NextButton";

class Faculties extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            faculties: [
                {
                    name: "Faculty of Education",
                    id: "1",
                    isSelected: false,
                },
                {
                    name: "Faculty of Law",
                    id: "2",
                    isSelected: false,
                },
                {
                    name: "Faculty of Science",
                    id: "3",
                    isSelected: false,
                },
                {
                    name: "Faculty of Arts",
                    id: "4",
                    isSelected: false,
                },
                
            ],

            selectedUniversities: [],
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
                            Choose the faculty you are interested in (Select all
                            that apply)
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

                        {this.state.faculties.map((faculty) => (

                            <div className="mb-1">
                                <input
                                    type="checkbox"
                                    id={faculty.id}
                                    className="mr-2 h-3 w-3 rounded-sm accent-space"
                                />
                                <label className="text-base" for={faculty.id}>
                                    {faculty.name}
                                </label>
                            </div>

                        ))}

                    </form>

                    <div className="flex flex-row-reverse">

                        <NextButton link="/steptwo" />

                    </div>

                </div>

            </Container>

        );
    }
}

export default Faculties;