import React, { useEffect, useState } from 'react';
import axios from 'axios';

export function DisplayMUBAS() {

    const [programmes, setProgrammes] = useState([]);

    useEffect(() => {

        const getProgrammes = async () => {

            const programmesUrl = `https://university-prospects.herokuapp.com/programmes`;
            const { data } = await axios.get(programmesUrl);
            setProgrammes(data);

        }

        getProgrammes();

    }, []);

    const APPLIED = programmes.filter(programme => programme.facultyid === 11);
    const BUILT = programmes.filter(programme => programme.facultyid === 12);
    const COMMERCE = programmes.filter(programme => programme.facultyid === 13);
    const EDUCATION = programmes.filter(programme => programme.facultyid === 14);
    const ENGINEERING = programmes.filter(programme => programme.facultyid === 15);


    return (

        <div className="overflow-auto flex flex-col mt-20 md:mx-52">

            <h1 className="m-2 font-semibold text-6xl text-space">Malawi University of Business and Applied Sciences <span className='text-jonquil'>(MUBAS)</span></h1>

            <p className="text-lg text-gray-600">
                Malawi University of Business and Applied Sciences is a public university
                that was established in 1965 as part of the constituent colleges
                under the then University of Malawi before delinking to be a standalone
                university in 2019. It is situated in Blantyre. <a href="http://www.mubas.ac.mw/" target={'_blank'} rel="noreferrer" className="text-space font-medium underline decoration-jonquil">Learn more about KUHES here.</a>
            </p>
            <p className="text-lg mt-2 text-gray-600">
                Malawi University of Business and Applied Sciences has 5 faculties:
                <ul>
                    <li><a href='#apl' className='underline decoration-jonquil text-space font-medium text-lg'>Faculty of Applied Sciences</a></li>
                    <li><a href='#bui' className='underline decoration-jonquil text-space font-medium text-lg'>Faculty of Built Environment</a></li>
                    <li><a href='#com' className='underline decoration-jonquil text-space font-medium text-lg'>Faculty of Commerce</a></li>
                    <li><a href='#edu' className='underline decoration-jonquil text-space font-medium text-lg'>Faculty of Education and Media Studies</a></li>
                    <li><a href='#eng' className='underline decoration-jonquil text-space font-medium text-lg'>Faculty of Engineering</a></li>
                </ul>
            </p>


            <div id='apl'>

                <h1 className="mt-10 font-semibold text-left text-2xl text-space underline decoration-jonquil">Faculty of Applied Sciences</h1>
                <p className='text-lg text-gray-600 mb-2'>The following programmes are under the faculty of applied sciences</p>

                <div className='mb-2'>
                    {
                        APPLIED.length > 0 ?
                            APPLIED.map(programme => (
                                <li key={programme.id} className="text-lg text-gray-600">{programme.name}</li>
                            ))
                            : <p>Loading ...</p>
                    }
                </div>

                <p className='p-2 mb-4 font-semibold text-lg text-gray-600'>
                    To qualify for any one of the programmes, you must have a minimum of six strong credits (5 points or less) or it's equivalent (C) including English
                    and Mathematics plus a minimum of at least 2 science subjects.
                </p>

            </div>


            <div id='bui'>

                <h1 className="mt-10 font-semibold text-left text-2xl text-space underline decoration-jonquil">Faculty of Built Environment</h1>
                <p className='text-lg text-gray-600 mb-2'>The following programmes are under the faculty of Built Environment</p>
                <div className='mb-2'>
                    {
                        BUILT.length > 0 ?
                            BUILT.map(programme => (
                                <li key={programme.id} className="text-lg text-gray-600">{programme.name}</li>
                            ))
                            : <p>Loading ...</p>
                    }
                </div>
                <p className='p-2 mb-4 font-semibold text-lg text-gray-600'>
                To qualify for any one of the programmes, you must have a minimum of six strong credits (5 points or less) or it's equivalent (C) including English
                    and Mathematics plus a minimum of at least 2 science subjects. To qualify for the Land economy and Architecture programmes,  having a subject in the
                    Creative Arts will be an advantage.
                </p>

            </div>


            <div id='com'>

                <h1 className="mt-10 font-semibold text-left text-2xl text-space underline decoration-jonquil">Faculty of Commerce</h1>
                <p className='text-lg text-gray-600 mb-2'>The following programmes are under the Faculty of Commerce</p>
                <div className='mb-2'>
                    {
                        COMMERCE.length > 0 ?
                            COMMERCE.map(programme => (
                                <li key={programme.id} className="text-lg text-gray-600">{programme.name}</li>
                            ))
                            : <p>Loading ...</p>
                    }
                </div>
                <p className='p-2 mb-4 font-semibold text-lg text-gray-600'>
                    To qualify for any one of the programmes, you must have a minimum of six credits or it's equivalent (C) including English
                    and Mathematics.
                </p>

            </div>


            <div id='edu'>

                <h1 className="mt-10 font-semibold text-left text-2xl text-space underline decoration-jonquil">Faculty of Education and Media Studies</h1>
                <p className='text-lg text-gray-600 mb-2'>The following programmes are under the Faculty of Education and Media Studies</p>
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
                    To qualify for any one of the programmes, you must have a minimum of six credits or it's equivalent (C) including English
                    and Mathematics.
                </p>

            </div>


            <div id='eng'>

                <h1 className="mt-10 font-semibold text-left text-2xl text-space underline decoration-jonquil">Faculty of Engineering</h1>
                <p className='text-lg text-gray-600 mb-2'>The following programmes are under the faculty of Engineering</p>
                <div className='mb-2'>
                    {
                        ENGINEERING.length > 0 ?
                            ENGINEERING.map(programme => (
                                <li key={programme.id} className="text-lg text-gray-600">{programme.name}</li>
                            ))
                            : <p>Loading ...</p>
                    }
                </div>
                <p className='p-2 mb-4 font-semibold text-lg text-gray-600'>
                    To qualify for any one of the programmes, you must have a minimum of six strong credits (5 points or less) or it's equivalent (C) including English and
                    Mathematics and a combination of 2 science subjects.
                </p>

            </div>

        </div>

    );
}