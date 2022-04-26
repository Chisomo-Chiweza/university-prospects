
export default function Errors(props) {

    let errorCode = props.errorCode;
    const numberOfSubjects = props.numberOfSubjects;

    if (errorCode === 1) {

        return (

            <p className="text-red-800 text-sm text-center m-4">Please fill out all fields.</p>

        );

    }

    if (errorCode === 2) {

        return (

            <p className="text-red-800 text-sm text-center m-4">
                You have selected {numberOfSubjects} subjects which are too few.<br />
                Be sure to select <span className="font-semibold">six subjects</span>.
            </p>

        );

    }

    if (errorCode === 3) {

        return (

            <p className="text-red-800 text-sm text-center m-4">
                You have selected {numberOfSubjects} subjects which are too many.<br />
                Be sure to select only <span className="font-semibold">six subjects</span>.
            </p>

        );

    }

    return null;

}

