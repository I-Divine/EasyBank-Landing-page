import RequestInvite from "../RequestInvite";
import "../../App.css";
import Header from "./Header";
import NavLinks from "./Navlinks";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <div className=" bg-white flex justify-between h-20 px-5  items-center z-10 relative">
      <Header />
      <NavLinks />

      <div className=" hidden lg:block">
        <RequestInvite />
      </div>

      <MobileNav />
    </div>
  );
};
export default Navbar;
