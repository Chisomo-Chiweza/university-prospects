
function FormErrors(props) {

    return(

        <div className="overflow-auto h-12 px-14 mx-auto mb-4 bg-red-100 hover:bg-red-300 border border-red-400 rounded shadow-sm">
            {
                Object.entries(props.FormErrors).forEach(([key, value]) => {

                    <p className="text-lg text-red-600 font-semibold">
                        {key} : {value}
                    </p>
                })
            }
        </div>
    );
}

export default FormErrors