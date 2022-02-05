import React,{useState} from 'react';
import Homepage from '../../utilities/homepage';
function Results({programs}){
    const[state, setState] = useState({
        programs:[
            {
                name:"Bachelor of Pharmacy",
                Faculty:"Faculty of Biomedical Science and Health Professions",
                university:"Kamuzu university of Health science"
            },
            {
                name:"Bachelor of Education (Computer Science)",
                Faculty:"Fulcuty of Education",
                university:"University of Malawi Fomally known as Chancellor College"
            },
            {
                name:"Bachelor of Engineering Biomedical Engineering (Honours)",
                Faculty:"Fulcuty of Malawi Institute of Technology (MIT)",
                university:"The Malawi University of Science and Technology"
            },
            {
                name:"Bachelor of Science in Food Science and Technology",
                Faculty:"Fulcuty of food and Human Science",
                university:" Lilongwe University of Agriculture and Natural Resources"
            },
            {
                name:"Bachelor of scince/Bachelor of Surgery",
                Faculty:"Fulcuty of medicice",
                university:"Kamuzu university of Health science"
            }
        ]  
      })
    return(<>
    {state.programs.map((data, index)=>{
                return <div key={index} className='text-space border-2 items-center'>
                    <strong className='my-0.1 text-3xl text-yellow-500'>{data.name}</strong><br/>
                    <small className='text-2xl'>{data.Faculty}</small><br/>
                    <small>{data.university}</small>
                    </div>
            })} 
            </> 
            )
}

export default Results;