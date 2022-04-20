import { Component } from 'react';
import DisplayProgrammes from './DisplayProgrammes';
import Errors from './validation/Errors';

class Grades extends Component {

    constructor(props) {

        super(props);
        this.state = {

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
            // loadProgrammes: true
        })

        for (let i = 0; i < ids.length; i++) {

            const subjectId = ids[i];
            const input = document.getElementById(`input # ${subjectId}`);
            input.value = '';

        }

        console.log(this.state.subjectsWithGrades);

    }

    render() {

        const { subjects, loadProgrammes, subjectsWithGrades, errorCode } = this.state;

        return (

            <div>
                <h1 className="mt-10 font-semibold text-lg text-center">Grades</h1>

                <Errors errorCode={errorCode} />

                <form onSubmit={this.enterGrades} className="mt-4">

                    {subjects.map((subject, index) => (


                        <div key={index}>


                            <label key={subject.name} htmlFor={subject.id} className="text-sm">{subject.name}</label><br />
                            <input
                                key={subject.id}
                                id={`input # ${subject.id}`}
                                type="number"
                                className="p-1 rounded border-2 border-yellow-600 bg-yellow-100 required:border-red-600 required:bg-red-100"
                                required={false}
                            />
                            
                        </div>

                    ))}

                    <button onClick={this.props.onClick} className="mt-10 bg-blue-700 text-white px-4 py-1 rounded mx-auto mr-4">Back</button>
                    <button type="submit" className="mt-10 bg-green-700 text-white px-4 py-1 rounded mx-auto">Submit</button>

                </form>

                {loadProgrammes ? <DisplayProgrammes finalSubjects={subjectsWithGrades} onClick={this.previous} /> : null}

            </div>

        );

    }

}

export default Grades;