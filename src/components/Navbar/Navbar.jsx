import ResquestInvite from "../RequestInvite";
import "../../App.css";
import Header from "./Header";
import NavLinks from "./Navlinks";

const Navbar = () => {
  return (
    <div className=" bg-white flex justify-between h-20 px-5  items-center">
      <Header />
      <NavLinks />
      <ResquestInvite />
    </div>
  );
};
export default Navbar;
