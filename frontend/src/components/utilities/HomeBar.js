import Logo from "../assets/logo.png";

function HomeBar(props) {
  return (
    <div className="flex justify-center pt-6">
      <img
        src={Logo}
        alt="Logo"
        className="h-52 object-scale-down object-top"
      ></img>
    </div>
  );
}

export default HomeBar;
