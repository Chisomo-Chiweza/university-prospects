// Import dependencies
import { Component } from "react";
import axios from "axios";
import Radium, { StyleRoot } from 'radium';
import { slideInUp, slideInRight, fadeIn } from 'react-animations';


// Import components
import ChooseCurriculum from "./enter-grades/ChooseCurriculum";
import SelectSubjects from "./enter-grades/SelectSubjects";
import FillinGrades from "./enter-grades/FillInGrades";
import FilterUniversities from "./enter-grades/FilterUniversities";
import Generate from "./enter-grades/Generate";

class EnterGrades extends Component {

    constructor(props) {
        super(props);

        this.state = {

            // Important data
            currentStep: 1,
            curriculums: [],
            selectedCurriculum: 0,
            subjects: [],
            programmes: [],
            selectedSubjects: [],
            universities: [],
            grades: [],
            dataIsLoaded: false,
            programmes: [],

            // Form validation
            formErrors: { subjects: '', grade: '' },
            subjectInputValid: false,
            gradeValid: false,
            formValid: false

        };

        this.nextStep = this.nextStep.bind(this);
        this.previousStep = this.previousStep.bind(this);
        this.getPreviousButton = this.getPreviousButton.bind(this);
        this.getNextButton = this.getNextButton.bind(this);
        this.handleSubjectsInput = this.handleSubjectsInput.bind(this);
        this.handleGradesInput = this.handleSubjectsInput.bind(this);
        this.generateButton = this.generateButton.bind(this);
        this.generateStep = this.generateStep.bind(this);
    
    }

    componentDidMount() {

        // Get curriculums
        axios.get(`https://university-prospects.herokuapp.com/curriculums`)
            .then((response) => {
                console.log(response);
                console.log("successfully retrieved curriculums");
                this.setState({
                    curriculums: response.data,
                    dataIsLoaded: true
                });
            })

        // Get subjects
        axios.get(`https://university-prospects.herokuapp.com/subjects`)
            .then((response) => {
                console.log(response);
                console.log("successfully retrieved subjects");
                this.setState({
                    subjects: response.data,
                    dataIsLoaded: true
                }, () => {
                    console.log(this.state.subjects);
                })
            })

        // Get universities
        axios.get(`https://university-prospects.herokuapp.com/universities`)
            .then((response) => {
                console.log(response);
                console.log("successfully retrieved universities");
                this.setState({
                    universities: response.data,
                    dataIsLoaded: true
                }, () => {
                    console.log(this.state.universities)
                })
            })

        // Get programmes
        axios.get(`https://university-prospects.herokuapp.com/programmes`)
            .then((response) => {
                console.log("successfully retrieved programmes");
                this.setState({
                    programmes: response.data,
                    dataIsLoaded: true
                }, () => {
                    console.log(this.state.programmes)
                })
            })

    }

    
    handleSubjectsInput(event) {
        this.setState({
            selectedSubjects: [this.state.selectedSubjects, ...event.target.value]
        }, console.log(this.state.selectedSubjects))
    }

    handleGradesInput(event) {
        event.preventDefault()
        this.setState({
            grades: [...this.state.grades, event.target.value]
        })
    }

    validateField(fieldName, value) {

        let fieldValidationErrors = this.state.formErrors;
        let gradeValid = this.state.gradeValid

        switch(fieldName) {
            case 'grade':
                gradeValid = value <= 9;
                fieldValidationErrors.grade = gradeValid ? '' : 'is invalid';
            break;
            default:
        }

        this.setState({
            formErrors: fieldValidationErrors,
            gradeValid: gradeValid,
        })
        
    }

    validateForm() {

    }

    nextStep() {

        let currentStep = this.state.currentStep;
        // if current step is 1, 2, 3 or 4 then add 1  on next button click
        currentStep = currentStep >= 5 ? 5 : currentStep + 1;
        this.setState({
            currentStep: currentStep
        })

        console.log(currentStep)

    }

    generateStep() {

        let currentStep = this.state.currentStep;
        // if current step is 1, 2, 3 or 4 then add 1  on next button click
        currentStep = currentStep === 4 ? currentStep + 1 : currentStep - 1;
        this.setState({
            currentStep: currentStep
        })

        console.log(currentStep)

    }

    previousStep() {

        let currentStep = this.state.currentStep;
        // if the current step is step 2, 3 or 4, then subtract 1 on previous button click
        currentStep = currentStep <= 1 ? 1 : currentStep - 1;
        this.setState({
            currentStep: currentStep
        })

        console.log(currentStep)
    }

    getPreviousButton() {

        let currentStep = this.state.currentStep;
        // if the current step is not step 1, then render a previous button
        if (currentStep !== 1) {
            return (
                <button type="button" className="px-6 py-1 mx-auto mt-6 rounded border-2 border-blue-600 bg-blue-200 font-semibold text-space" onClick={this.previousStep}>
                    Previous
                </button>
            )
        }

        return null;

    }

    getNextButton() {

        let currentStep = this.state.currentStep;
        // if the current step is not step 4, then render a next button
        if (currentStep !== 4) {
            return (
                <button type="button" className="px-6 py-1 mx-auto mt-6 rounded border-2 border-blue-600 bg-blue-200 font-semibold text-space" onClick={this.nextStep}>
                    Next
                </button>
            )
        }

        return null;

    }

    generateButton() {

        let currentStep = this.state.currentStep;
        // if the current step is step 4, generate
        if (currentStep === 4) {
            return (
                <button type="button" className="px-6 py-1 mx-auto mt-6 rounded border-2 border-green-600 bg-green-200 font-semibold text-space" onClick={this.generateStep}>
                    Generate
                </button>
            )
        }

        return null;

    }

    render() {

        const styles = {

            slideInUp: {
                animation: 'x 0.5s',
                animationName: Radium.keyframes(slideInUp, 'slideInUp')
            },

            slideInRight: {
                animation: 'x 0.3s',
                animationName: Radium.keyframes(slideInRight, 'slideInRight')
            },

            fadeIn: {
                animation: 'x 0.5s',
                animationName: Radium.keyframes(fadeIn, 'fadeIn')
            }

        }

        const { currentStep, curriculums, subjects, selectedSubjects, dataIsLoaded, universities } = this.state;

        return (

            <StyleRoot>

                <div className="overflow-auto" style={styles.slideInUp}>

                    <div>
                        <h1 className="text-center text-4xl font-semibold text-gray-700 mb-4 mt-10">Simple process</h1>
                        <p className="text-center text-xl text-gray-500 mx-4">
                            To generate the programmes you're most eligible for,
                            follow the steps below.
                        </p>

                        <div className="bg-ivory m-6 border border-gray-200 shadow-sm p-1 pb-8">

                            <ChooseCurriculum
                                currentStep={currentStep}
                                curriculums={curriculums}
                                isLoaded={dataIsLoaded}
                            />
                            <SelectSubjects
                                currentStep={currentStep}
                                curriculumSubjects={subjects}
                                isLoaded={dataIsLoaded}
                                onChange={this.handleSubjectsInput}
                                animate={styles.fadeIn}
                            />
                            <FillinGrades
                                currentStep={currentStep}
                                selectedSubjects={selectedSubjects}
                                isLoaded={dataIsLoaded}
                                animate={styles.fadeIn}
                            />

                            <FilterUniversities
                                currentStep={currentStep}
                                universities={universities}
                                isLoaded={dataIsLoaded}
                                animate={styles.fadeIn}
                            />

                            <Generate 
                                currentStep={currentStep}
                                animate={styles.fadeIn}
                            />

                        </div>

                        <div className="flex justify-center mt-6">
                            {this.getPreviousButton()}
                            {this.getNextButton()}
                            {this.generateButton()}
                        </div>

                    </div>

                </div>

            </StyleRoot>

        );
    }

}

export default EnterGrades;