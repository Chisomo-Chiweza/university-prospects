import { Component } from 'react';
import Errors from './validation/Errors';

class MSCEGrades extends Component {

    constructor(props) {

        super(props);
        this.state = {

            step: this.props.Step,
            subjects: this.props.subjects,
            subjectsWithGrades: [],
            errorCode: 0,
            loadProgrammes: false 

        }

        this.enterGrades = this.enterGrades.bind(this);
        this.previous = this.previous.bind(this);

    }

    previous(event) {

        event.preventDefault();

        this.setState({
            loadProgrammes: false,
            subjectsWithGrades: []
        })

    }

    isValid(event, valid) {

        event.preventDefault();

        let isValid = true;
        const ids = [];
        const { subjects } = this.state;

        for (let i = 0; i < subjects.length; i++) {

            const subject = subjects[i];
            ids.push(subject.id)

        }

        for (let i = 0; i < ids.length; i++) {

            const subjectId = ids[i];
            const input = document.getElementById(`input # ${subjectId}`);

            if (input.value === '') {

                input.required = true;
                isValid = false;
                this.setState({ errorCode: 1 })

            }

            if (valid) {

                input.required = false;
                isValid = true;
                this.setState({ errorCode: 0 })

            }

        }

        return isValid;

    }


    enterGrades(event) {

        if (!this.isValid(event)) {
            return
        } else {
            this.isValid(event, true);
        }

        event.preventDefault();

        const ids = [];
        const { subjects, subjectsWithGrades } = this.state;

        for (let i = 0; i < subjects.length; i++) {

            const subject = subjects[i];
            ids.push(subject.id)

        }

        for (let i = 0; i < ids.length; i++) {

            const subjectId = ids[i];
            const input = document.getElementById(`input # ${subjectId}`);
            let subject = subjects.find(subject => subject.id === subjectId);
            subject.grade = input.value
            subjectsWithGrades.push(subject);

        }

        this.setState({
            subjectsWithGrades: subjectsWithGrades,
            loadProgrammes: true
        }, () => {
            this.props.sendGraded(this.state.subjectsWithGrades);
        })

        for (let i = 0; i < ids.length; i++) {

            const subjectId = ids[i];
            const input = document.getElementById(`input # ${subjectId}`);
            input.value = '';

        }

    }

    render() {

        const { subjects, errorCode } = this.state;

        return (

            <div className='overflow-auto md:mx-auto mt-4 p-10 border border-gray-300 rounded bg-ivory'>

                <h1 className="font-semibold text-lg text-center">Step 2</h1>
                <p className='text-base text-center'>Enter the grade you got using one of the options provided</p>

                <Errors errorCode={errorCode} />

                <form onSubmit={this.enterGrades} className="mt-4 grid grid-cols-2 gap-4">

                    {subjects.map((subject, index) => (


                        <div key={index}>


                            <label key={subject.name} htmlFor={subject.id} className="text-sm">{subject.name}</label><br />
                            <select
                                key={subject.id}
                                id={`input # ${subject.id}`}
                                className="mb-4 p-2 text-gray-500 text-sm rounded border-2 border-yellow-600 bg-yellow-100 required:border-red-600 required:bg-red-100"
                                required={false}
                            >
                                <option value="" selected disabled>Select Point number</option>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                                <option value={6}>6</option>

                            </select>
                            
                        </div>

                    ))}

                    <button type="submit" className="mt-10 bg-green-700 focus:ring-2 focus:ring-green-500 focus:bg-green-900 text-white px-4 py-1 rounded mx-auto">Submit</button>

                </form>

            </div>

        );

    }

}

export default MSCEGrades;