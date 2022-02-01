import StepPage from "../utilities/steppage";

function StepTwo() {

    const number = "2"
    const content = "Enter in your grades"
    
    return(
        
        <StepPage number={number} content={content} />
        
    );

}

export default StepTwo;