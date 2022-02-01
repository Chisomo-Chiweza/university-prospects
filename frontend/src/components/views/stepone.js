import StepPage from "../utilities/steppage";

function StepOne() {

    const number = "1"
    const content = "Choose which public university you would like to apply to"
    
    return(
        
        <StepPage number={number} content={content} />
        
    );

}

export default StepOne;