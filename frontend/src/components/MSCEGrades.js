import { Component } from 'react';
import Errors from './validation/Errors';

class MSCEGrades extends Component {

    constructor(props) {

        super(props);
        this.state = {

            subjects: this.props.subjects,
            subjectsWithGrades: [],
            errorCode: 0,

        }

        this.enterGrades = this.enterGrades.bind(this);

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

            <div>

                <h1 className='font-semibold text-6xl text-center text-space'>Programme <span className='text-jonquil'>Generation</span></h1>
                <h1 className="mt-4 mx-auto mb-6 font-semibold text-gray-700 text-2xl text-center">
                    To generate the programmes you are eligible for, <br /> follow the steps below <br />
                </h1>

                <div className='overflow-auto md:mx-auto mt-4 p-10 border border-gray-300 rounded bg-white'>

                    <h1 className="font-semibold text-xl text-space text-center mb-2">Step 2</h1>
                    <p className='text-base text-center text-gray-600 mb-6'>
                        Select your grade from the options provided. <br />
                        <span className='text-red-500 font-semibold'>
                            Note: The minimum grade you need to qualify <br />
                            for any programme is grade point 6. Anything <br />
                            higher makes you ineligible for any programme.
                        </span>
                    </p>

                    <Errors errorCode={errorCode} />

                    <form onSubmit={this.enterGrades} className="mt-4 grid grid-cols-2 gap-4">

                        {subjects.map((subject, index) => (


                            <div key={index} className="">


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

                        <button type="submit" className="mt-10 bg-green-700 focus:ring-2 focus:ring-green-500 focus:bg-green-900 font-semibold text-white px-4 py-1 rounded mx-auto">Enter Grades</button>

                    </form>

                </div>

            </div>

        );

    }

}

export default MSCEGrades;