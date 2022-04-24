
export function DisplayKUHES(props) {

    const programmes = props.programmes

    return (
        <div>
            <h1 className="m-2 font-semibold">Kamuzu University of Health Sciences (KUHES)</h1>
            <p>
                Kamuzu University of Health Sciences is a public university 
                that was established in 1965 as part of the constituent colleges
                under the then University of Malawi before delinking to be a standalone
                university in 2019. It is situated in Blantyre. <br />
                <a href="https://www.kuhes.ac.mw/">Visit it's website here to learn more about the university.</a>
            </p>
            <h2>Programmes froms this university that you qualified for:</h2>

            <ol>
                {programmes.map(programme => (
                    <li key={programme.id}>{programme.name}</li>
                ))}
            </ol>
        </div>
    );
}