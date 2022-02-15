function NavBar(props) {
  return (
    <div className="mx-4 mt-4 mb-0 flex">
      <img
        src={props.arrow}
        alt="left arrow"
        className="flex-initial object-scale-down object-top"
      ></img>
      <img
        src={props.logo}
        alt="Logo"
        className="h-52 flex-1 object-scale-down object-top"
      ></img>
    </div>
  );
}

export default NavBar;
