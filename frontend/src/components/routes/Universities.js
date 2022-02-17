import React from "react";
import Container from "../utilities/Container";
import NextButton from "../utilities/NextButton";

class Universities extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            universities: [
                {
                    name: "Kamuzu University of Health Sciences",
                    code: "KUHES",
                    isSelected: false,
                },
                {
                    name: "Malawi University of Business and Applied Sciences",
                    code: "MUBAS",
                    isSelected: false,
                },
                {
                    name: "University of Malawi",
                    code: "UNIMA",
                    isSelected: false,
                },
                {
                    name: "Malawi University of Science and Technology",
                    code: "MUST",
                    isSelected: false,
                },
                {
                    name: "Mzuzu University",
                    code: "MZUNI",
                    isSelected: false,
                },
                {
                    name: "Lilongwe University of Agriculture and Natural Resources",
                    code: "UNIMA",
                    isSelected: false,
                },
            ],

            selectedUniversities: [],
        };

        this.selectAll = this.selectAll.bind(this);

    }

    selectAll(event) {
        let selectedUniversities = this.state.universities;
        selectedUniversities.forEach(
            (selectedUniversity) =>
                (selectedUniversity.isSelected = event.target.checked)
        );
        this.setState({ universities: selectedUniversities });
    }

    render() {
        return (
            
            <Container>

                <div className="mx-auto p-6 bg-ivory border rounded drop-shadow-md">

                    <form className="flow-root w-auto p-2">
                        <p className="mb-3 text-xl font-semibold">
                            Choose which public university you are interested in: (Select all
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

                        {this.state.universities.map((university) => (

                            <div className="mb-1">
                                <input
                                    type="checkbox"
                                    id={university.code}
                                    className="mr-2 h-3 w-3 rounded-sm accent-space"
                                />
                                <label className="text-base" for={university.code}>
                                    {university.name}
                                </label>
                            </div>

                        ))}

                    </form>

                    <div className="flex flex-row-reverse">

                        <NextButton link="/selectfaculties" />

                    </div>

                </div>

            </Container>

        );
    }
}

export default Universities;