import { Component } from 'react';
import axios from 'axios';
import Errors from './validation/Errors';
class Subjects extends Component {

    constructor(props) {

        super(props);
        this.state = {

            curriculumId: props.curriculumId,
            curriculumSubjects: [],
            selectedSubjects: [],
            errorCode: 0,
            numberOfSubjects: 0

        }

        this.handleSelection = this.handleSelection.bind(this);

    }

    componentDidMount() {

        const getCurriculumSubjects = async () => {

            const curriculumId = this.state.curriculumId;
            const curriculumUrl = `https://university-prospects.herokuapp.com/curriculumSubjects/${curriculumId}`;
            const { data } = await axios.get(curriculumUrl);
            this.setState({ data: data });
            this.setState({ curriculumSubjects: this.state.data.subjects });

        }

        getCurriculumSubjects();

    }

    isValid(event, valid) {

        event.preventDefault();

        let isValid = true;
        let { selectedSubjects, numberOfSubjects } = this.state;
        numberOfSubjects = selectedSubjects.length;

        if (selectedSubjects.length < 6) {

            this.setState({
                errorCode: 2,
                numberOfSubjects: numberOfSubjects
            })

            while (selectedSubjects.length > 0) {
                selectedSubjects.pop();
            }

            isValid = false;

        }

        if (selectedSubjects.length > 6) {

            this.setState({
                errorCode: 3,
                numberOfSubjects: numberOfSubjects
            })

            while (selectedSubjects.length > 0) {
                selectedSubjects.pop();
            }

            isValid = false;

        }

        if (valid) {

            this.setState({
                errorCode: 0,
                numberOfSubjects: 0
            })

            isValid = true;

        }

        return isValid;

    }


    handleSelection(event) {

        event.preventDefault();

        const ids = [];
        const { curriculumSubjects } = this.state;
        let checkedItems = [];
        let selectedSubjects = this.state.selectedSubjects;

        if (selectedSubjects.length > 0) {
            while (selectedSubjects.length > 0) {
                selectedSubjects.pop();
            }
        }

        if (ids.length > 0) {
            while (ids.length > 0) {
                ids.pop()
            }
        }

        if (checkedItems.length > 0) {
            while (checkedItems.length > 0) {
                checkedItems.pop()
            }
        }

        if (selectedSubjects > 0) {
            while (selectedSubjects > 0) {
                selectedSubjects.pop()
            }
        }

        for (let i = 0; i < curriculumSubjects.length; i++) {

            const subject = curriculumSubjects[i];
            ids.push(subject.id)

        }

        for (let i = 0; i < ids.length; i++) {

            const id = ids[i];
            const input = document.getElementById(id);

            if (input.checked) {
                checkedItems.push(parseInt(input.id));
            }

            if (!input.checked) {
                checkedItems = checkedItems.filter(id => id !== parseInt(input.id))
            }

        }

        for (let i = 0; i < checkedItems.length; i++) {

            const subjectId = checkedItems[i];
            selectedSubjects.push(curriculumSubjects.filter(subject => subject.id === subjectId)[0]);

        }

        if (!this.isValid(event)) {
            return
        } else {
            this.isValid(event, true);
        }

        this.setState({ selectedSubjects: selectedSubjects }, () => { this.props.sendSubjects(this.state.selectedSubjects) });

    }

    render() {

        const { curriculumSubjects, errorCode, numberOfSubjects } = this.state;


        return (


            <div>

                <h1 className='font-semibold text-6xl text-center text-space'>Programme <span className='text-jonquil'>Generation</span></h1>
                <h1 className="mt-4 mx-auto mb-6 font-semibold text-gray-700 text-2xl text-center">
                    To generate the programmes you are eligible for, <br /> follow the steps below <br />
                </h1>
                
                <div className='overflow-auto md:mx-auto mt-4 p-10 border border-gray-300 rounded bg-white'>

                    <h1 className="font-semibold text-xl text-space text-center">Step 2</h1>
                    <h2 className='text-center text-lg text-gray-600'>Select your <span className='text-red-500 font-semibold'>6</span> highest subjects</h2>

                    <Errors errorCode={errorCode} numberOfSubjects={numberOfSubjects} />

                    <form className="mt-10 grid grid-cols-2 gap-2" onSubmit={this.handleSelection}>

                        {
                            curriculumSubjects.length ?

                                curriculumSubjects.filter(subject => subject.discipline === 'English').map((subject, index) => (

                                    <div key={index}>

                                        <label key={subject.name} htmlFor={subject.name}>{subject.name}</label>
                                        <input
                                            key={subject.id}
                                            id={subject.id}
                                            type="checkbox"
                                            name={subject.name}
                                            className="ml-3"
                                            checked
                                            disabled

                                        />

                                    </div>

                                ))

                                :

                                <button disabled type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center">
                                    <svg role="status" className="inline mr-3 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                                    </svg>
                                    Loading subjects
                                </button>

                        }

                        {

                            curriculumSubjects.filter(subject => subject.discipline !== 'English').map((subject, index) => (

                                <div key={index}>

                                    <label key={subject.name} htmlFor={subject.name}>{subject.name}</label>
                                    <input
                                        key={subject.id}
                                        id={subject.id}
                                        type="checkbox"
                                        name={subject.name}
                                        className="ml-3"
                                    />

                                </div>

                            ))

                        }


                        <button type="submit" className="mt-10 bg-green-700 focus:ring-2 focus:ring-green-500 focus:bg-green-900 font-semibold text-white px-4 py-1 rounded mx-auto">Select Subjects</button>

                    </form>

                </div>

            </div>


        );

    }

}

export default Subjects;