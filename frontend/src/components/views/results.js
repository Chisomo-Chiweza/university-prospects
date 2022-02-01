import React from 'react';
import Homepage from '../utilities/page-home';
class Results extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            Programs: []
        }
    }
    render(){
        const Hie = <h1 className='font-bold text-center text-4xl text-ivory'>Welcome</h1>
        return(
           <Homepage content={Hie} />
        );
    }
}

export default Results;