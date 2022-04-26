import React, { useEffect, useState } from 'react';
import axios from 'axios';

export function DisplayUNIMA() {

    const [programmes, setProgrammes] = useState([]);

    useEffect(() => {

        const getProgrammes = async () => {

            const programmesUrl = `https://university-prospects.herokuapp.com/programmes`;
            const { data } = await axios.get(programmesUrl);
            setProgrammes(data);

        }

        getProgrammes();

    }, []);

    const EDUCATION = programmes.filter(programme => programme.facultyid === 7);
    const HUMANITIES = programmes.filter(programme => programme.facultyid === 8);
    const SCIENCE = programmes.filter(programme => programme.facultyid === 9);
    const SOCIAL = programmes.filter(programme => programme.facultyid === 10);

    return (

        <div className="overflow-auto flex flex-col mt-20 md:mx-52">

            <h1 className="m-2 font-semibold text-6xl text-space">University of Malawi<span className='text-jonquil'>(UNIMA)</span></h1>

            <p className="text-lg text-gray-600">
                The University of Malawi is a public university
                that was established in 1965 as part of the constituent colleges
                under also collectively known as University of Malawi before delinking to be a standalone
                university in 2019. It is situated in Zomba. <a href="https://www.unima.ac.mw/" target={'_blank'} rel="noreferrer" className="text-space font-medium underline decoration-jonquil">Learn more about UNIMA here.</a>
            </p>
            <p className="text-lg mt-2 text-gray-600">
                Kamuzu University has 4 faculties:
                <ul>
                    <li><a href='#edu' className='underline decoration-jonquil text-space font-medium text-lg'>Faculty of Education</a></li>
                    <li><a href='#hum' className='underline decoration-jonquil text-space font-medium text-lg'>Faculty of Humanities</a></li>
                    <li><a href='#sci' className='underline decoration-jonquil text-space font-medium text-lg'>Faculty of Science</a></li>
                    <li><a href='#soc' className='underline decoration-jonquil text-space font-medium text-lg'>Faculty of Social Science</a></li>
                </ul>
            </p>


            <div id='edu'>

                <h1 className="mt-10 font-semibold text-left text-2xl text-space underline decoration-jonquil">Faculty of Education</h1>
                <p className='text-lg text-gray-600 mb-2'>The following programmes are under the faculty of Education</p>

                <div className='mb-2'>
                    {
                        EDUCATION.length > 0 ?
                            EDUCATION.map(programme => (
                                <li key={programme.id} className="text-lg text-gray-600">{programme.name}</li>
                            ))
                            : <p>Loading ...</p>
                    }
                </div>

                <p className='p-2 mb-4 font-semibold text-lg text-gray-600'>
                    To qualify for any one of the programmes, you must have a minimum of six credits or it's equivalent (C) including English and
                    Mathematics. For the science programmes, include at least 2 sciences as well. For the social science programme, include at
                    2 social science related subjects (like History or Social and developmental studies) and for the Languages programme, include at
                    two humanities subjects.
                </p>

            </div>


            <div id='hum'>

                <h1 className="mt-10 font-semibold text-left text-2xl text-space underline decoration-jonquil">Faculty of Humanities</h1>
                <p className='text-lg text-gray-600 mb-2'>The following programmes are under the faculty of Humanities</p>
                <div className='mb-2'>
                    {
                        HUMANITIES.length > 0 ?
                            HUMANITIES.map(programme => (
                                <li key={programme.id} className="text-lg text-gray-600">{programme.name}</li>
                            ))
                            : <p>Loading ...</p>
                    }
                </div>
                <p className='p-2 mb-4 font-semibold text-lg text-gray-600'>
                    To qualify for any one of the programmes, you must have a minimum of six credits or it's equivalent (C) plus a minimum
                    of 4 points (or B) in Biology, Chemistry, Physics or a third science subject.
                </p>

            </div>


            <div id='sci'>

                <h1 className="mt-10 font-semibold text-left text-2xl text-space underline decoration-jonquil">Faculty of Science</h1>
                <p className='text-lg text-gray-600 mb-2'>The following programmes are under the faculty of Science</p>
                <div className='mb-2'>
                    {
                        SCIENCE.length > 0 ?
                            SCIENCE.map(programme => (
                                <li key={programme.id} className="text-lg text-gray-600">{programme.name}</li>
                            ))
                            : <p>Loading ...</p>
                    }
                </div>
                <p className='p-2 mb-4 font-semibold text-lg text-gray-600'>
                    To qualify for any one of the programmes, you must have a minimum of six credits or it's equivalent (C) including English
                    and Mathematics and a combination of any sciences. To qualify for the Actuarial Science program, you must have 4 points in
                    English and 2 points in Mathematics/Additional Mathematics. 
                </p>

            </div>


            <div>

                <h1 id="social" className="mt-10 font-semibold text-left text-2xl text-space underline decoration-jonquil">Faculty of Social Science</h1>
                <p className='text-lg text-gray-600 mb-2'>The following programmes are under the Faculty of Social Science</p>
                <div className='mb-2'>
                    {
                        SOCIAL.length > 0 ?
                            SOCIAL.map(programme => (
                                <li key={programme.id} className="text-lg text-gray-600">{programme.name}</li>
                            ))
                            : <p>Loading ...</p>
                    }
                </div>
                <p className='p-2 mb-4 font-semibold text-lg text-gray-600'>
                    To qualify for any one of the programmes, you must have a minimum of six credits or it's equivalent (C) including English and Mathematics. 
                    The Law enforcement, management and leadership program requires strong credits (5 and above for MSCE and C's and above for IGCSE) and the
                    inclusion of any 2 science subjects.
                </p>

            </div>

        </div>

    );
}