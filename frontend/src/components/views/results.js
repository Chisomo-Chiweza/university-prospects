import React from 'React';
import Homepage from "../utilities/homepage";
class Results extends React.Component{
    constructor(props){
        super(props);
        this.state={
            Programs:[]
        }

    }
    render(){
        const Hie=<h1 className='font-bold text-center text-4xl text-ivory'>Welcome to University Prospectus</h1>
        return(
            <Homepage content={Hello} />
        );
    }
}

export default Results;