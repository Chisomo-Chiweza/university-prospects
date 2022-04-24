import { Link } from "react-router-dom";

export default function KUHESEligible(props) {

    const loadKUHES = props.loadKUHES;
    
    if (loadKUHES) {

        return (

            <div>

                <Link to="/KUHES" target="_blank">
                    <div className="p-4 bg-white border border-gray-400 shadow-md rounded">
                        <h2 className="m-2 text-center font-semibold">Kamuzu University of Health Sciences</h2>
                        <p className="m-2 text-center text-base">Click to view programmes you qualified for from this university</p>
                    </div>
                </Link>
                
            </div>

        )

    } else {
        return null;
    }

}