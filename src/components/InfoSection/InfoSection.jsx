import onlineIcon from "../../assets/images/icon-online.svg";
import budgetingIcon from "../../assets/images/icon-budgeting.svg";
import onboardingIcon from "../../assets/images/icon-onboarding.svg";
import apiIcon from "../../assets/images/icon-api.svg";
const Info = () => {
  const containerStyle = " w-60";
  return (
    <div className=" px-10 md:px-20 py-20">
      <div>
        <h2 className=" text-5xl text-dark-blue text-center md:text-left">
          Why choose Easybank ?
        </h2>
        <p className=" text-lg text-grayish-blue text-center md:text-left">
          We leverage Open Banking to turn your bank account into your financial
          hub.
          <br />
          Control your finances like never before.
        </p>
      </div>
      <div className="flex gap-8 flex-wrap  justify-center md:justify-start">
        <KeypointContainer
          image={onlineIcon}
          header={"Online Banking"}
          content={
            "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the in the world."
          }
        />
        <KeypointContainer
          image={budgetingIcon}
          header={"Simple Budgeting"}
          content={
            "See exactly where your money goes each month. Receive notifications when you're close to hitting your limits."
          }
        />

        <KeypointContainer
          image={onboardingIcon}
          header={"Fast Onboarding"}
          content={
            "We don't do branches. Open your account in minutes online and start taking control of your finances right away."
          }
        />
        <KeypointContainer
          image={apiIcon}
          header={"Fast API"}
          content={
            "Manage your savings, investments, pension, and more from one account. Tracking your money has never been easier."
          }
        />
      </div>
    </div>
  );
};
export default Info;

function KeypointContainer({ image, header, content }) {
  return (
    <div className="w-full text-center mt-8 md:text-left md:max-w-80 md:max-w-60">
      <div className=" flex justify-center md:block">
        <img className="mb-4" src={image || ""} alt="" />
      </div>
      <h3 className=" text-2xl font-medium my-4 text-dark-blue">{header}</h3>
      <p className="text-lg text-grayish-blue">{content}</p>
    </div>
  );
}
