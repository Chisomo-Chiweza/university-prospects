import { Component } from 'react';
import DisplayProgrammes from './DisplayProgrammes';

class Grades extends Component {

    constructor(props) {

        super(props);
        this.state = {
            subjects: this.props.subjects,
            subjectsWithGrades: [],
            loadProgrammes: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {

        event.preventDefault();

        const subjectId = document.getElementById(event.target.id);
        const { subjects, subjectsWithGrades } = this.state;

        const subject = subjects.find(subject => subject.id === parseInt(subjectId.id));
        subject.grade = event.target.value;


        subjectsWithGrades.push(subject);
        this.setState({ subjectsWithGrades: subjectsWithGrades });
        console.log(subjectsWithGrades);

    }

    handleSubmit(event) {
        
        event.preventDefault();
        this.setState({ loadProgrammes: true });
        alert('Your grades have been submitted successfully!');

    }

    render() {

        const { subjects, loadProgrammes, subjectsWithGrades } = this.state;

        return (

            <div>
                <h1 className="mt-10 font-semibold text-lg text-center">Grades</h1>

                <form onSubmit={this.handleSubmit} className="mt-4">

                    {subjects.map((subject, index) => (

                        <div key={index}>
                            <label key={subject.name} htmlFor={subject.name} className="text-sm">{subject.name}</label><br />
                            <input key={subject.id} id={subject.id} onChange={this.handleChange} type="number" className="p-1 rounded border border-yellow-500 bg-yellow-300" />
                        </div>

                    ))}

                    <button type="submit" className="mt-10 bg-green-500 text-black px-4 py-1 rounded mx-auto">Submit</button>

                </form>

                { loadProgrammes ? <DisplayProgrammes finalSubjects={subjectsWithGrades} /> : null }

            </div>

        );

    }

}

export default Grades;