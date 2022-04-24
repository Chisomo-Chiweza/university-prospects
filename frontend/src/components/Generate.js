import { Component } from "react";
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
            programmes: [],

        }

        this._next = this._next.bind(this);
        this._prev = this._prev.bind(this);
        this.previousButton = this.previousButton.bind(this);
        this.nextButton = this.nextButton.bind(this);
        this.setCurriculum = this.setCurriculum.bind(this);
        this.setSubjects = this.setSubjects.bind(this);
        this.setSubjectsWithGrades = this.setSubjectsWithGrades.bind(this);
        this.getProgrammes = this.getProgrammes.bind(this);

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

        if(currentStep !== 1){
            return(
                <button className="mt-6 mr-20 mx-auto p-1 px-4 border-2 border-blue-900 bg-blue-800 text-white rounded" onClick={() => this._prev()}>Previous</button>
            )
        }

        return null;
    }

    nextButton() {

        let currentStep = this.state.step;

        if(currentStep !== 4){
            return(
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

    getProgrammes(recommendedProgrammes) {

        let { programmes } = this.state;
        programmes = recommendedProgrammes;
        this.setState({ programmes: programmes }, () => { this.props.sendProgrammes(this.state.programmes) });

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
            step

        } = this.state;

        return (

            <div className="overflow-auto flex flex-col items-center mt-32 md:mx-52">

                <h1 className="font-semibold text-4xl m-4">Programme generation</h1>
                <p className="text-center text-lg">
                    To be able to generate the programmes you are eligible for, <br /> 
                    follow the steps outlined below.
                </p>

                <div className="flex flex-col items-center">

                    {
                        loadCurriculums ?
                        <Curriculums 
                            Step={step} 
                            sendCurriculum={this.setCurriculum}
                        /> : null
                    }
                    

                    {     
                        loadSubjects ? 
                        <Subjects
                            Step={step} 
                            curriculumId={curriculum} 
                            sendSubjects={this.setSubjects} 
                            loadIGCSE={this.loadIGCSEGrades} 
                            loadMSCE={this.loadMSCEGrades} 
                        /> : null
                    }
                    { 
                        loadIGCSEGrades ? 
                        <IGCSEGrades
                            Step={step} 
                            subjects={selectedSubjects} 
                            sendGraded={this.setSubjectsWithGrades}  
                        /> : null 
                    }
                    { 
                        loadMSCEGrades ? 
                        <MSCEGrades
                            Step={step}
                            subjects={selectedSubjects} 
                            sendGraded={this.setSubjectsWithGrades}  
                        /> : null }
                    { 
                        loadProgrammes ? 
                        <DisplayProgrammes
                            Step={step} 
                            finalSubjects={subjectsWithGrades} 
                            sendProgrammes={this.getProgrammes } 
                        /> : null
                    }

                    <div className="flex justify-center">
                        {this.previousButton()}
                        {this.nextButton()}
                    </div>
                    

                </div>

            </div>

        );

    }


}

export default Generate