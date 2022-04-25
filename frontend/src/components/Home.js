import { Link } from "react-router-dom";

export default function Home() {

    return (

        <div className="overflow-auto flex flex-col items-center mt-32 md:mx-52">

            <div className="flex flex-col items-center">

                <h1 className="text-8xl font-semibold text-space">University <span className="text-jonquil">Prospects</span></h1>

                <p className="mx-20 mt-4 text-center text-xl text-gray-600">
                    University Prospects is a web application that is designed to help future applicants to public university
                    know the programmes they are eligible for beforehand.
                </p>

                <Link to="/generate">
                    <button className="mt-10 mx-auto p-2 px-4 rounded focus:ring-2 ring-space bg-space text-jonquil font-semibold text-xl">Get started</button>
                </Link>

            </div>

        </div>

    );
}