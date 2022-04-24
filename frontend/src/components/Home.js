import { Link } from "react-router-dom";

export default function Home() {

    return (

        <div className="overflow-auto flex flex-col items-center mt-32 md:mx-52">

            <div className="flex flex-col items-center">
                <h1>University Prospects</h1>

                <Link to="/generate">
                    <button className="mt-6 mx-auto p-1 px-4 border-2 border-blue-900 bg-white rounded">Get started</button>
                </Link>

            </div>

        </div>

    );
}