import ResquestInvite from "../RequestInvite";
import "../../App.css";
import Header from "./Header";
import NavLinks from "./Navlinks";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <div className=" bg-white flex justify-between h-20 px-5  items-center">
      <Header />
      <NavLinks />

      <div className=" hidden md:block">
        <ResquestInvite />
      </div>

      <MobileNav />
    </div>
  );
};
export default Navbar;
