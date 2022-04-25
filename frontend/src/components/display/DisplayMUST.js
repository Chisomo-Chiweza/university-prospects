import React, { useEffect, useState } from 'react';
import axios from 'axios';

export function DisplayMUST() {

    const [programmes, setProgrammes] = useState([]);

    useEffect(() => {

        const getProgrammes = async () => {

            const programmesUrl = `https://university-prospects.herokuapp.com/programmes`;
            const { data } = await axios.get(programmesUrl);
            setProgrammes(data);

        }

        getProgrammes();

    }, []);

    const MIT = programmes.filter(programme => programme.facultyid === 16);
    const NDATHA = programmes.filter(programme => programme.facultyid === 17);
    const MSC = programmes.filter(programme => programme.facultyid === 18);
    const BINGU = programmes.filter(programme => programme.facultyid === 19);

    return (

        <div className="overflow-auto flex flex-col mt-20 md:mx-52">

            <h1 className="m-2 font-semibold text-6xl text-space">Malawi University of Science and Technology <span className='text-jonquil'>(MUST)</span></h1>

            <p className="text-lg text-gray-600">
                The Malawi University of Science and Technology is a public university
                that was established in 2012. It is situated in Thyolo, Blantyre. <a href="https://www.must.ac.mw/" target={'_blank'} rel="noreferrer" className="text-space font-medium underline decoration-jonquil">Learn more about MUST here.</a>
            </p>
            <p className="text-lg mt-2 text-gray-600">
                Malawi University of Science and Technology has 4 faculties:
                <ul>
                    <li><a href='#mit' className='underline decoration-jonquil text-space font-medium text-lg'>Malawi Institute of Technology</a></li>
                    <li><a href='#nda' className='underline decoration-jonquil text-space font-medium text-lg'>Ndatha School of Climate and Earth Sciences</a></li>
                    <li><a href='#msc' className='underline decoration-jonquil text-space font-medium text-lg'>Academy of Medical Sciences</a></li>
                    <li><a href='#bin' className='underline decoration-jonquil text-space font-medium text-lg'>Bingu School of Culture and Heritage</a></li>
                </ul>
            </p>


            <div id='mit'>

                <h1 className="mt-10 font-semibold text-left text-2xl text-space underline decoration-jonquil">Malawi Institute of Technology</h1>
                <p className='text-lg text-gray-600 mb-2'>The following programmes are under the Malawi Institute of Technology</p>

                <div className='mb-2'>
                    {
                        MIT.length > 0 ?
                            MIT.map(programme => (
                                <li key={programme.id} className="text-lg text-gray-600">{programme.name}</li>
                            ))
                            : <p>Loading ...</p>
                    }
                </div>

                <p className='p-2 mb-4 font-semibold text-lg text-gray-600'>
                    To qualify for any one of the programmes, you must have a minimum of six credits or it's equivalent (C) including English and
                    Mathematics. You must also make sure to have no more than 4 points (MSCE) or C (IGCSE) in English, Mathematics and any 2 science subjects.
                </p>

            </div>


            <div id='nda'>

                <h1 className="mt-10 font-semibold text-left text-2xl text-space underline decoration-jonquil">Ndatha School of CLimate and Earth Sciences</h1>
                <p className='text-lg text-gray-600 mb-2'>The following programmes are under the Ndatha school of CLimate and Earth Sciences</p>
                <div className='mb-2'>
                    {
                        NDATHA.length > 0 ?
                            NDATHA.map(programme => (
                                <li key={programme.id} className="text-lg text-gray-600">{programme.name}</li>
                            ))
                            : <p>Loading ...</p>
                    }
                </div>
                <p className='p-2 mb-4 font-semibold text-lg text-gray-600'>
                To qualify for any one of the programmes, you must have a minimum of six credits or it's equivalent (C) including English and
                    Mathematics. You must also make sure to have no more than 4 points (MSCE) or C (IGCSE) in English, Mathematics and any 2 science
                    subjects including Geography.
                </p>

            </div>


            <div id='msc'>

                <h1 className="mt-10 font-semibold text-left text-2xl text-space underline decoration-jonquil">Academy of Medical Sciences</h1>
                <p className='text-lg text-gray-600 mb-2'>The following programmes are under the Academy of Medical Sciences</p>
                <div className='mb-2'>
                    {
                        MSC.length > 0 ?
                            MSC.map(programme => (
                                <li key={programme.id} className="text-lg text-gray-600">{programme.name}</li>
                            ))
                            : <p>Loading ...</p>
                    }
                </div>
                <p className='p-2 mb-4 font-semibold text-lg text-gray-600'>
                To qualify for any one of the programmes, you must have a minimum of six credits or it's equivalent (C) including English and
                    Mathematics. You must also make sure to have no more than 4 points (MSCE) or C (IGCSE) in English, Mathematics and any 2 science subjects.
                </p>

            </div>


            <div>

                <h1 id="bin" className="mt-10 font-semibold text-left text-2xl text-space underline decoration-jonquil">Bingu School of Culture and Heritage</h1>
                <p className='text-lg text-gray-600 mb-2'>The following programmes are under the Bingu School of Culture and Heritage</p>
                <div className='mb-2'>
                    {
                        BINGU.length > 0 ?
                            BINGU.map(programme => (
                                <li key={programme.id} className="text-lg text-gray-600">{programme.name}</li>
                            ))
                            : <p>Loading ...</p>
                    }
                </div>
                <p className='p-2 mb-4 font-semibold text-lg text-gray-600'>
                To qualify for any one of the programmes, you must have a minimum of six credits or it's equivalent (C) including English and
                    Mathematics. You must also make sure to have no more than 4 points (MSCE) or C (IGCSE) in English, Mathematics and any 2 humanities or arts subjects.
                </p>

            </div>

        </div>

    );
}