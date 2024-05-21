import harmburgerIcon from "../../assets/images/icon-hamburger.svg";
import closeIcon from "../../assets/images/icon-close.svg";
import RequestInvite from "../RequestInvite";
const MobileNav = () => {
  return (
    <>
      <div className=" md:hidden">
        <label htmlFor="isOpen">
          <input type="checkbox" id="isOpen" className=" peer hidden" />
          <img src={harmburgerIcon} className=" peer-checked:hidden" alt="" />
          <img src={closeIcon} className=" hidden peer-checked:block" alt="" />
          <div className=" hidden peer-checked:flex absolute top-20 left-0 w-full h-screen bg-gradient-to-b from-[hsla(0,0%,9%,0.4)] from-20% justify-center z-5 ">
            <nav className=" bg-white w-11/12 h-max flex flex-col items-center gap-5 p-5 mt-5 rounded">
              <a href="">Home</a>
              <a href="">About</a>
              <a href="">Contact</a>
              <a href="">Blog</a>
              <a href="">Careers</a>
              <RequestInvite />
            </nav>
          </div>
        </label>
      </div>
    </>
  );
};
export default MobileNav;
