function Button(props) {

    const customstyle = props.bgcolor +" " +props.textcolor
    const style = "flex flex-row gap-4 justify-center p-3 px-8 mx-auto border rounded-md text-xl font-bold focus:ring-2 focus:ring-white" +" " +customstyle

    return(
        <button className={style}>
            {props.name} <img src={props.arrow} alt="right arrow"></img>
        </button>
    );

}

export default Button;