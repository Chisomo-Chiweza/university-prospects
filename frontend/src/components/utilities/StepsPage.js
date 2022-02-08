import NavArrow from "../assets/left-arrow-yellow.png";
import logo from "../assets/logo.png";
import NavBar from "./NavBar";
import Pill from "./Pill";

function StepPage(props) {
  return (
    <div className="flex h-screen w-screen flex-col bg-space">
      <NavBar arrow={NavArrow} logo={logo} />

      <div className="mx-auto flex flex-col justify-center rounded-lg bg-ivory p-6 px-20">
        <h1 className="mb-4 text-center text-4xl font-bold text-black">
          Step {props.number}
        </h1>
        <p className="w-56 text-center text-2xl text-black">{props.content}</p>
        <Pill />
      </div>
    </div>
  );
}

export default StepPage;
