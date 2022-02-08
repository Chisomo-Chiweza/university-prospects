import Arrow from "../assets/right-arrow-light.png";

function FormButton() {
  return (
    <button className=" float-right mt-6 flex flex-row justify-center gap-3 rounded bg-space p-1 px-2 text-base text-white drop-shadow-xl duration-150 hover:-translate-y-0.5 hover:scale-110">
      Next{" "}
      <span>
        <img src={Arrow} alt="right arrow" className="object-none"></img>
      </span>
    </button>
  );
}

export default FormButton;
