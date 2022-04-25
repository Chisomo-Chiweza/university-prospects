import React, { useEffect, useState } from 'react';
import axios from 'axios';

export function DisplayMZUNI() {

    const [programmes, setProgrammes] = useState([]);

    useEffect(() => {

        const getProgrammes = async () => {

            const programmesUrl = `https://university-prospects.herokuapp.com/programmes`;
            const { data } = await axios.get(programmesUrl);
            setProgrammes(data);

        }

        getProgrammes();

    }, []);

    const EDUCATION = programmes.filter(programme => programme.facultyid === 20);
    const HEALTH = programmes.filter(programme => programme.facultyid === 21);
    const HUMANITIES = programmes.filter(programme => programme.facultyid === 22);
    const SCIENCE = programmes.filter(programme => programme.facultyid === 23);
    const ENVIRONMENT = programmes.filter(programme => programme.facultyid === 24);
    const TOURISM = programmes.filter(programme => programme.facultyid === 25);

    return (

        <div className="overflow-auto flex flex-col mt-20 md:mx-52">

            <h1 className="m-2 font-semibold text-6xl text-space">Mzuzu University <span className='text-jonquil'>(MZUNI)</span></h1>

            <p className="text-lg text-gray-600">
                Mzuzu University is a public university
                that was established in 1997 as part of the constituent colleges
                under the then University of Malawi before delinking to be a standalone
                university in 2019. It is situated in Mzuzu. <a href="https://www.mzuni.ac.mw/" target={'_blank'} rel="noreferrer" className="text-space font-medium underline decoration-jonquil">Learn more about mzuni here.</a>
            </p>
            <p className="text-lg mt-2 text-gray-600">
                Mzuzu University has 6 faculties:
                <ul>
                    <li><a href='#edu' className='underline decoration-jonquil text-space font-medium text-lg'>Faculty of Education</a></li>
                    <li><a href='#hea' className='underline decoration-jonquil text-space font-medium text-lg'>Faculty of Health Sciences</a></li>
                    <li><a href='#hum' className='underline decoration-jonquil text-space font-medium text-lg'>Faculty of Humanities and Social Sciences</a></li>
                    <li><a href='#sci' className='underline decoration-jonquil text-space font-medium text-lg'>Faculty of Science, Technology and Innovation</a></li>
                    <li><a href='#env' className='underline decoration-jonquil text-space font-medium text-lg'>Faculty of Environmental Science</a></li>
                    <li><a href='#tou' className='underline decoration-jonquil text-space font-medium text-lg'>Faculty of Tourism, Hospitality and Management</a></li>
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
                    To qualify for any one of the programmes, you must have a minimum of six credits or it's equivalent (C) including English
                    and Mathematics.
                </p>

            </div>


            <div id='hea'>

                <h1 className="mt-10 font-semibold text-left text-2xl text-space underline decoration-jonquil">Faculty of Health Sciences</h1>
                <p className='text-lg text-gray-600 mb-2'>The following programmes are under the faculty of Health Sciences</p>
                <div className='mb-2'>
                    {
                        HEALTH.length > 0 ?
                            HEALTH.map(programme => (
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


            <div id='hum'>

                <h1 className="mt-10 font-semibold text-left text-2xl text-space underline decoration-jonquil">Faculty of Humanities and Social Sciences</h1>
                <p className='text-lg text-gray-600 mb-2'>The following programmes are under the faculty of HUmanities and Social Sciences</p>
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
                To qualify for any one of the programmes, you must have a minimum of six credits or it's equivalent (C) including English
                    and Mathematics. 
                </p>

            </div>


            <div id='sci'>

                <h1 className="mt-10 font-semibold text-left text-2xl text-space underline decoration-jonquil">Faculty of Science, Technology and Innovation</h1>
                <p className='text-lg text-gray-600 mb-2'>The following programmes are under the Faculty of Science, Technology and Innovation</p>
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
                    and Mathematics.
                </p>

            </div>


            <div id='env'>

                <h1 className="mt-10 font-semibold text-left text-2xl text-space underline decoration-jonquil">Faculty of Environmental Science</h1>
                <p className='text-lg text-gray-600 mb-2'>The following programmes are under the Faculty of Environmental Science</p>
                <div className='mb-2'>
                    {
                        ENVIRONMENT.length > 0 ?
                            ENVIRONMENT.map(programme => (
                                <li key={programme.id} className="text-lg text-gray-600">{programme.name}</li>
                            ))
                            : <p>Loading ...</p>
                    }
                </div>
                <p className='p-2 mb-4 font-semibold text-lg text-gray-600'>
                    To qualify for any one of the programmes, you must have a minimum of six credits or it's equivalent (C) including English and
                    Mathematics. Other subjects such as Geography, Social and development studies are also recommended.
                </p>

            </div>


            <div id='tou'>

                <h1 className="mt-10 font-semibold text-left text-2xl text-space underline decoration-jonquil">Faculty of Tourism</h1>
                <p className='text-lg text-gray-600 mb-2'>The following programmes are under the Faculty of Tourism</p>
                <div className='mb-2'>
                    {
                        TOURISM.length > 0 ?
                            TOURISM.map(programme => (
                                <li key={programme.id} className="text-lg text-gray-600">{programme.name}</li>
                            ))
                            : <p>Loading ...</p>
                    }
                </div>
                <p className='p-2 mb-4 font-semibold text-lg text-gray-600'>
                    To qualify for any one of the programmes, you must have a minimum of six credits or it's equivalent (C) including English
                </p>

            </div>

        </div>

    );
}