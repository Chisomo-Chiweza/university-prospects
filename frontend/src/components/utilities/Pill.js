import Arrow from "../assets/right-arrow-light.png";

function Pill() {
  return (
    <button className="mx-auto mt-10 justify-center rounded-3xl border-2 border-white bg-space p-1 px-6 text-xl font-bold focus:ring-2 focus:ring-blue-500">
      <img src={Arrow} alt="right arrow"></img>
    </button>
  );
}

export default Pill;
