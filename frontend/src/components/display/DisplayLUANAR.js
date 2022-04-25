import React, { useEffect, useState } from 'react';
import axios from 'axios';

export function DisplayLUANAR() {

    const [programmes, setProgrammes] = useState([]);

    useEffect(() => {

        const getProgrammes = async () => {

            const programmesUrl = `https://university-prospects.herokuapp.com/programmes`;
            const { data } = await axios.get(programmesUrl);
            setProgrammes(data);

        }

        getProgrammes();

    }, []);

    const AGRICULTURE = programmes.filter(programme => programme.facultyid === 26);
    const DEVELOPMENT = programmes.filter(programme => programme.facultyid === 27);
    const FOOD = programmes.filter(programme => programme.facultyid === 28);
    const NATURAL = programmes.filter(programme => programme.facultyid === 29);
    const COLLEGE = programmes.filter(programme => programme.facultyid === 30);


    return (

        <div className="overflow-auto flex flex-col mt-20 md:mx-52">

            <h1 className="m-2 font-semibold text-6xl text-space">Lilongwe University of Agriculture and Natural Resources <span className='text-jonquil'>(LUANAR)</span></h1>

            <p className="text-lg text-gray-600">
                Lilongwe University of Agriculture and Natural Resources is a public university
                that was established in 2011 following a merger between Bunda College of Agriculture
                and the Natural Resources College. It is situated in Bunda, Lilongwe. <a href="https://luanar.ac.mw/luanar/" target={'_blank'} rel="noreferrer" className="text-space font-medium underline decoration-jonquil">Learn more about LUANAR here.</a>
            </p>
            <p className="text-lg mt-2 text-gray-600">
                Lilongwe University of Agriculture and Natural Resources has 5 faculties:
                <ul>
                    <li><a href='#agr' className='underline decoration-jonquil text-space font-medium text-lg'>Faculty of Agriculture</a></li>
                    <li><a href='#dev' className='underline decoration-jonquil text-space font-medium text-lg'>Faculty of Development Studies</a></li>
                    <li><a href='#foo' className='underline decoration-jonquil text-space font-medium text-lg'>Faculty of Food and Human Sciences</a></li>
                    <li><a href='#nat' className='underline decoration-jonquil text-space font-medium text-lg'>Faculty of Natural Sciences</a></li>
                    <li><a href='#col' className='underline decoration-jonquil text-space font-medium text-lg'>Natural Resources College</a></li>
                </ul>
            </p>


            <div id='agr'>

                <h1 className="mt-10 font-semibold text-left text-2xl text-space underline decoration-jonquil">Faculty of Agriculture</h1>
                <p className='text-lg text-gray-600 mb-2'>The following programmes are under the faculty of Agriculture</p>

                <div className='mb-2'>
                    {
                        AGRICULTURE.length > 0 ?
                            AGRICULTURE.map(programme => (
                                <li key={programme.id} className="text-lg text-gray-600">{programme.name}</li>
                            ))
                            : <p>Loading ...</p>
                    }
                </div>

                <p className='p-2 mb-4 font-semibold text-lg text-gray-600'>
                    To qualify for any one of the programmes, you must have a minimum of six strong credits (5 points or less) or it's equivalent (C) including English,
                    Agriculture and Mathematics plus a minimum of at least 2 science subjects.
                </p>

            </div>


            <div id='dev'>

                <h1 className="mt-10 font-semibold text-left text-2xl text-space underline decoration-jonquil">Faculty of Development Studies</h1>
                <p className='text-lg text-gray-600 mb-2'>The following programmes are under the faculty of Development Studies</p>
                <div className='mb-2'>
                    {
                        DEVELOPMENT.length > 0 ?
                            DEVELOPMENT.map(programme => (
                                <li key={programme.id} className="text-lg text-gray-600">{programme.name}</li>
                            ))
                            : <p>Loading ...</p>
                    }
                </div>
                <p className='p-2 mb-4 font-semibold text-lg text-gray-600'>
                    To qualify for any one of the programmes, you must have a minimum of six strong credits (5 points or less) or it's equivalent (C) including English,
                    Agriculture and Mathematics plus a minimum of at least 2 science subjects.
                </p>

            </div>


            <div id='foo'>

                <h1 className="mt-10 font-semibold text-left text-2xl text-space underline decoration-jonquil">Faculty of Food and Human Sciences</h1>
                <p className='text-lg text-gray-600 mb-2'>The following programmes are under the Faculty of Food and Human Sciences</p>
                <div className='mb-2'>
                    {
                        FOOD.length > 0 ?
                            FOOD.map(programme => (
                                <li key={programme.id} className="text-lg text-gray-600">{programme.name}</li>
                            ))
                            : <p>Loading ...</p>
                    }
                </div>
                <p className='p-2 mb-4 font-semibold text-lg text-gray-600'>
                    To qualify for any one of the programmes, you must have a minimum of six strong credits (5 points or less) or it's equivalent (C) including English,
                    Agriculture and Mathematics plus a minimum of at least 2 science subjects.
                </p>

            </div>


            <div id='nat'>

                <h1 className="mt-10 font-semibold text-left text-2xl text-space underline decoration-jonquil">Faculty of Natural Resources</h1>
                <p className='text-lg text-gray-600 mb-2'>The following programmes are under the Faculty of Natural Resources</p>
                <div className='mb-2'>
                    {
                        NATURAL.length > 0 ?
                            NATURAL.map(programme => (
                                <li key={programme.id} className="text-lg text-gray-600">{programme.name}</li>
                            ))
                            : <p>Loading ...</p>
                    }
                </div>
                <p className='p-2 mb-4 font-semibold text-lg text-gray-600'>
                    To qualify for any one of the programmes, you must have a minimum of six strong credits (5 points or less) or it's equivalent (C) including English,
                    Agriculture and Mathematics plus a minimum of at least 2 science subjects.
                </p>

            </div>


            <div id='col'>

                <h1 className="mt-10 font-semibold text-left text-2xl text-space underline decoration-jonquil">Natural Resources College</h1>
                <p className='text-lg text-gray-600 mb-2'>The following programmes are under the Natural Resources College</p>
                <div className='mb-2'>
                    {
                        COLLEGE.length > 0 ?
                            COLLEGE.map(programme => (
                                <li key={programme.id} className="text-lg text-gray-600">{programme.name}</li>
                            ))
                            : <p>Loading ...</p>
                    }
                </div>
                <p className='p-2 mb-4 font-semibold text-lg text-gray-600'>
                    To qualify for any one of the programmes, you must have a minimum of six strong credits (5 points or less) or it's equivalent (C) including English,
                    Agriculture and Mathematics plus a minimum of at least 2 science subjects.
                </p>

            </div>

        </div>

    );
}