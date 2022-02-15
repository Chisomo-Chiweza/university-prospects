import Arrow from "../assets/right-arrow-dark.png";

function HomeButton() {
  return (
    <button className="mx-auto flex flex-row justify-center gap-4 rounded-md bg-ivory p-3 px-8 text-xl font-bold text-space duration-100 hover:-translate-y-0.5 hover:scale-110">
      Get Started <img src={Arrow} alt="right arrow"></img>
    </button>
  );
}

export default HomeButton;
