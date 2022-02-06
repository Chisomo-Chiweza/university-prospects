function LightPage(props) {

    return(

        <div className="h-screen w-screen flex flex-col bg-white">
            {props.children}
        </div>
    );
}

export default LightPage;