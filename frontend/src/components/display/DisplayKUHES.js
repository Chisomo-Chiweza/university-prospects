import React, { useEffect, useState } from 'react';
import axios from 'axios';

export function DisplayKUHES() {

    const [programmes, setProgrammes] = useState([]);

    useEffect(() => {

        const getProgrammes = async () => {

            const programmesUrl = `https://university-prospects.herokuapp.com/programmes`;
            const { data } = await axios.get(programmesUrl);
            setProgrammes(data);

        }

        getProgrammes();

    }, []);

    const MEDICINE = programmes.filter(programme => programme.facultyid === 1);
    const BIOMEDICAL = programmes.filter(programme => programme.facultyid === 2);
    const PUBLIC = programmes.filter(programme => programme.facultyid === 3);
    const NURSING = programmes.filter(programme => programme.facultyid === 4);
    const COMMUNITY = programmes.filter(programme => programme.facultyid === 5);
    const MIDWIFERY = programmes.filter(programme => programme.facultyid === 6);

    return (

        <div className="overflow-auto flex flex-col mt-20 md:mx-52">

            <h1 className="m-2 font-semibold text-6xl text-space">Kamuzu University of Health Sciences <span className='text-jonquil'>(KUHES)</span></h1>

            <p className="text-lg text-gray-600">
                Kamuzu University of Health Sciences is a public university
                that was established in 1965 as part of the constituent colleges
                under the then University of Malawi before delinking to be a standalone
                university in 2019. It is situated in Blantyre. <a href="https://www.kuhes.ac.mw/" target={'_blank'} rel="noreferrer" className="text-space font-medium underline decoration-jonquil">Learn more about KUHES here.</a>
            </p>
            <p className="text-lg mt-2 text-gray-600">
                Kamuzu University has 6 faculties:
                <ul>
                    <li><a href='#med' className='underline decoration-jonquil text-space font-medium text-lg'>Faculty of Medicine</a></li>
                    <li><a href='#bio' className='underline decoration-jonquil text-space font-medium text-lg'>Faculty of Biomedical Sciences</a></li>
                    <li><a href='#pub' className='underline decoration-jonquil text-space font-medium text-lg'>Faculty of Public Health</a></li>
                    <li><a href='#nur' className='underline decoration-jonquil text-space font-medium text-lg'>Faculty of Nursing</a></li>
                    <li><a href='#com' className='underline decoration-jonquil text-space font-medium text-lg'>Faculty of Community Health</a></li>
                    <li><a href='#mid' className='underline decoration-jonquil text-space font-medium text-lg'>Faculty of Midwifery</a></li>
                </ul>
            </p>


            <div id='med'>

                <h1 className="mt-10 font-semibold text-left text-2xl text-space underline decoration-jonquil">Faculty of Medicine</h1>
                <p className='text-lg text-gray-600 mb-2'>The following programmes are under the faculty of Medicine</p>

                <div className='mb-2'>
                    {
                        MEDICINE.length > 0 ?
                            MEDICINE.map(programme => (
                                <li key={programme.id} className="text-lg text-gray-600">{programme.name}</li>
                            ))
                            : <p>Loading ...</p>
                    }
                </div>

                <p className='p-2 mb-4 font-semibold text-lg text-gray-600'>
                    To qualify for any one of the programmes, you must have a minimum of six credits or it's equivalent (C) including English
                    and Mathematics plus a minimum of 4 points (or B) in Biology, Chemistry, Physics or a third science subject.
                </p>

            </div>


            <div id='bio'>

                <h1 className="mt-10 font-semibold text-left text-2xl text-space underline decoration-jonquil">Faculty of Biomedical Science and Health Professions</h1>
                <p className='text-lg text-gray-600 mb-2'>The following programmes are under the faculty of Biomedical Science and Health Professions</p>
                <div className='mb-2'>
                    {
                        BIOMEDICAL.length > 0 ?
                            BIOMEDICAL.map(programme => (
                                <li key={programme.id} className="text-lg text-gray-600">{programme.name}</li>
                            ))
                            : <p>Loading ...</p>
                    }
                </div>
                <p className='p-2 mb-4 font-semibold text-lg text-gray-600'>
                    To qualify for any one of the programmes, you must have a minimum of six credits or it's equivalent (C) including English
                    and Mathematics plus a minimum of 4 points (or B) in Biology, Chemistry, Physics or a third science subject.
                </p>

            </div>


            <div id='pub'>

                <h1 className="mt-10 font-semibold text-left text-2xl text-space underline decoration-jonquil">School of Public Health and Family Medicine</h1>
                <p className='text-lg text-gray-600 mb-2'>The following programmes are under the school of Public Health and Family Medicine</p>
                <div className='mb-2'>
                    {
                        PUBLIC.length > 0 ?
                            PUBLIC.map(programme => (
                                <li key={programme.id} className="text-lg text-gray-600">{programme.name}</li>
                            ))
                            : <p>Loading ...</p>
                    }
                </div>
                <p className='p-2 mb-4 font-semibold text-lg text-gray-600'>
                    To qualify for any one of the programmes, you must have a minimum of six credits or it's equivalent (C) including English
                    and Mathematics plus a minimum of 4 points (or B) in Biology, Chemistry, Physics or a third science subject.
                </p>

            </div>


            <div id='nurs'>

                <h1 className="mt-10 font-semibold text-left text-2xl text-space underline decoration-jonquil">Faculty of Nursing Studies</h1>
                <p className='text-lg text-gray-600 mb-2'>The following programmes are under the Faculty of Nursing Studies</p>
                <div className='mb-2'>
                    {
                        NURSING.length > 0 ?
                            NURSING.map(programme => (
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


            <div id='comm'>

                <h1 className="mt-10 font-semibold text-left text-2xl text-space underline decoration-jonquil">Faculty of Community Health Studies</h1>
                <p className='text-lg text-gray-600 mb-2'>The following programmes are under the Faculty of Community Health Studies</p>
                <div className='mb-2'>
                    {
                        COMMUNITY.length > 0 ?
                            COMMUNITY.map(programme => (
                                <li key={programme.id} className="text-lg text-gray-600">{programme.name}</li>
                            ))
                            : <p>Loading ...</p>
                    }
                </div>
                <p className='p-2 mb-4 font-semibold text-lg text-gray-600'>
                    To qualify for any one of the programmes, you must have a minimum of six credits or it's equivalent (C) including English and
                    Mathematics.
                </p>

            </div>


            <div id='mid'>

                <h1 className="mt-10 font-semibold text-left text-2xl text-space underline decoration-jonquil">Faculty of Midwifery</h1>
                <p className='text-lg text-gray-600 mb-2'>The following programmes are under the Faculty of Midwifery</p>
                <div className='mb-2'>
                    {
                        MIDWIFERY.length > 0 ?
                            MIDWIFERY.map(programme => (
                                <li key={programme.id} className="text-lg text-gray-600">{programme.name}</li>
                            ))
                            : <p>Loading ...</p>
                    }
                </div>
                <p className='p-2 mb-4 font-semibold text-lg text-gray-600'>
                    To qualify for any one of the programmes, you must have a minimum of six credits or it's equivalent (C) including English and
                    Mathematics.
                </p>

            </div>

        </div>

    );
}