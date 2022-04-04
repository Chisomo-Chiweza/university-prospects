import React from "react";
import axios from "axios";
import Container from "../utilities/Container";
import NextButton from "../utilities/NextButton";

class Universities extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

            universities: [],
            selectedUniversities: [],
            dataIsLoaded: false

        };

    }

    componentDidMount() {

        axios.get("https://university-prospects.herokuapp.com/universities")
            .then((response) => {
                console.log(response);
                this.setState({
                    universities: response.data,
                    dataIsLoaded: true
                });
            });

    }

    render() {

        const { universities, dataIsLoaded } = this.state;

        return (

            <Container>

                <div className="mx-auto p-6 bg-ivory border rounded drop-shadow-md">

                    <form className="flow-root w-auto p-2">
                        <p className="mb-3 text-xl font-semibold">
                            Choose which public university you are interested in: (Select all
                            that apply)
                        </p>
                        
                        {universities.map((university) => (

                            <div className="mb-1">
                                <input
                                    type="checkbox"
                                    id={university.id}
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