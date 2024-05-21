import RequestInvite from "../RequestInvite";
import imageMockup from "../../assets/images/image-mockups.png";
const HeroSection = () => {
  return (
    <>
      <div className="grid md:grid-cols-2">
        <div
          className=" h-[350px] md:h-full relative
        bg-[url('/bg-intro-mobile.svg')] 
        md:bg-[url('/bg-intro-desktop.svg')] 
        md:col-start-2  bg-no-repeat bg-cover md:bg-[length:200%] bg-left md:bg-[10%] "
        >
          <img
            src={imageMockup}
            className=" absolute -bottom-0 md:left-20"
            alt=""
          />
        </div>
        <div className=" md:row-start-1 px-10 py-10 text-center md:text-left">
          <h3 className=" text-5xl">Next generation digital banking</h3>
          <p className=" text-lg my-10 line">
            Take your financial life online. Your EasyBank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more,
          </p>
          <div className="my-20">
            <RequestInvite />
          </div>
        </div>
      </div>
    </>
  );
};
export default HeroSection;