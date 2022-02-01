import Button from "../utilities/button";
import Homepage from "../utilities/homepage";
import Arrow from "../assets/right-arrow-dark.png";

function Home() {

    const content = 
    <div className="flex flex-col justify-center">

        <h1 className="mb-20 text-ivory text-7xl font-bold">See your top programs.</h1>
        <Button bgcolor="bg-ivory" textcolor="text-space" name="Get started" arrow={Arrow} />

    </div>
    
    return(
        
        <Homepage content={content} />
    );

}

export default Home;