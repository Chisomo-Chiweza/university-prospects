// Import dependencies
import { Component } from "react";

// Import components
import Curriculums from "./Curriculums";
import Subjects from "./Subjects";
import IGCSEGrades from "./IGCSEGrades";
import MSCEGrades from "./MSCEGrades";
import DisplayProgrammes from "./DisplayProgrammes";

class Generate extends Component {

    constructor(props) {

        super(props);

        this.state = {

            step: 1,
            loadCurriculums: true,
            curriculum: null,
            loadSubjects: false,
            loadIGCSEGrades: false,
            loadMSCEGrades: false,
            selectedSubjects: [],
            subjectsWithGrades: [],
            loadProgrammes: false,

        }

        this._next = this._next.bind(this);
        this._prev = this._prev.bind(this);
        this.previousButton = this.previousButton.bind(this);
        this.nextButton = this.nextButton.bind(this);
        this.setCurriculum = this.setCurriculum.bind(this);
        this.setSubjects = this.setSubjects.bind(this);
        this.setSubjectsWithGrades = this.setSubjectsWithGrades.bind(this);

    }

    _next() {

        let currentStep = this.state.step;
        let curriculum = this.state.curriculum;

        switch (currentStep) {
            case 1:
                this.setState({ loadCurriculums: false })
                this.setState({ loadSubjects: true })
                currentStep = currentStep + 1
                break;
            case 2:
                this.setState({ loadSubjects: false })
                if (parseInt(curriculum) === 1) {
                    this.setState({ loadIGCSEGrades: true })
                }
                if (parseInt(curriculum) === 2) {
                    this.setState({ loadMSCEGrades: true })
                }
                currentStep = currentStep + 1
                break;
            case 3:
                if (parseInt(curriculum) === 1) {
                    this.setState({ loadIGCSEGrades: false })
                }
                if (parseInt(curriculum) === 2) {
                    this.setState({ loadMSCEGrades: false })
                }
                this.setState({ loadProgrammes: true })
                currentStep = currentStep + 1
                break;
            default:
                break;
        }
        this.setState({ step: currentStep })

    }

    _prev() {

        let currentStep = this.state.step;
        let curriculum = this.state.curriculum;

        switch (currentStep) {
            case 4:
                this.setState({ loadProgrammes: false })
                if (parseInt(curriculum) === 1) {
                    this.setState({ loadIGCSEGrades: true })
                }
                if (parseInt(curriculum) === 2) {
                    this.setState({ loadMSCEGrades: true })
                }
                currentStep = currentStep - 1
                break;
            case 3:
                if (parseInt(curriculum) === 1) {
                    this.setState({ loadIGCSEGrades: false })
                }
                if (parseInt(curriculum) === 2) {
                    this.setState({ loadMSCEGrades: false })
                }
                this.setState({ loadSubjects: true })
                currentStep = currentStep - 1
                break;
            case 2:
                this.setState({ loadSubjects: false })
                this.setState({ loadCurriculums: true })
                currentStep = currentStep - 1
                break;
            default:
                break;
        }
        this.setState({ step: currentStep })

    }

    previousButton() {

        let currentStep = this.state.step;

        if (currentStep !== 1) {
            return (
                <button className="mt-6 mx-auto p-1 px-4 border-2 border-blue-900 bg-blue-800 text-white rounded" onClick={() => this._prev()}>Previous</button>
            )
        }

        return null;
    }

    nextButton() {

        let currentStep = this.state.step;

        if (currentStep !== 4) {
            return (
                <button className="mt-6 mx-auto p-1 px-4 border-2 border-blue-900 bg-blue-800 text-white rounded" onClick={() => this._next()}>Next</button>
            )
        }

        return null;

    }

    setCurriculum(chosenCurriculum) {

        let { curriculum } = this.state;
        curriculum = chosenCurriculum;
        this.setState({ curriculum: curriculum });

    }

    setSubjects(chosenSubjects) {

        let { selectedSubjects } = this.state;
        selectedSubjects = chosenSubjects;
        this.setState({ selectedSubjects: selectedSubjects });

    }

    setSubjectsWithGrades(gradedSubjects) {

        let { subjectsWithGrades } = this.state;
        subjectsWithGrades = gradedSubjects;
        this.setState({ subjectsWithGrades: subjectsWithGrades });

    }

    render() {

        const {

            loadCurriculums,
            loadSubjects,
            curriculum,
            loadIGCSEGrades,
            loadMSCEGrades,
            selectedSubjects,
            loadProgrammes,
            subjectsWithGrades,

        } = this.state;

        return (

            <div className="p-4">

                <div className="overflow-auto flex flex-col items-center mt-32 md:mx-52">

                    <div className="flex flex-col items-center">

                        {
                            loadCurriculums ?
                                <Curriculums
                                    sendCurriculum={this.setCurriculum}
                                /> : null
                        }


                        {
                            loadSubjects ?
                                <Subjects
                                    curriculumId={curriculum}
                                    sendSubjects={this.setSubjects}
                                /> : null
                        }
                        {
                            loadIGCSEGrades ?
                                <IGCSEGrades
                                    subjects={selectedSubjects}
                                    sendGraded={this.setSubjectsWithGrades}
                                /> : null
                        }
                        {
                            loadMSCEGrades ?
                                <MSCEGrades
                                    subjects={selectedSubjects}
                                    sendGraded={this.setSubjectsWithGrades}
                                /> : null}
                        {
                            loadProgrammes ?
                                <DisplayProgrammes
                                    finalSubjects={subjectsWithGrades}
                                    sendProgrammes={this.getProgrammes}
                                /> : null
                        }

                    </div>

                </div>

                <div className="flex flex-row md:mx-52">

                    {this.previousButton()}
                    {this.nextButton()}

                </div>

            </div>


        );

    }


}

export default Generate