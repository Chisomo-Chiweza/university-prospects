export default function Card(props) {

    return(

        <div className="mx-auto p-6 bg-white border rounded drop-shadow-md">
            { props.children }
        </div>
    );
}