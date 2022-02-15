import LightPage from "../../utilities/LightPage";
import NavArrow from "../../assets/left-arrow-blue.png";
import logo from "../../assets/logo-dark.png";
import NavBar from "../../utilities/NavBar";
import Universities from "./Universities";

function SelectUniversities() {
  return (
    <LightPage>
      <NavBar arrow={NavArrow} logo={logo} />

      <Universities />
    </LightPage>
  );
}

export default SelectUniversities;
