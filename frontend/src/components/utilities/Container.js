export default function Container(props) {

    return(

        <div className="mx-auto p-10 bg-space border rounded drop-shadow-md flex flex-col items-center">
            { props.children }
        </div>
    );
}