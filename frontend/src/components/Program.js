
function DisplayPrograms(props) {

    const programme = props.programme;

    return (

        <div>
            <h1>These are your programme choices ya'll.</h1>
            <div>

                <div>
                    <h1>{programme.name}</h1>
                    <h3>{programme.name}</h3>
                    <p>{programme.description}</p>
                </div>

            </div>
        </div>

    );

}

export default DisplayPrograms;