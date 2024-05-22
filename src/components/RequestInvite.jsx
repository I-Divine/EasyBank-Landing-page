const RequestInvite = ({ fontSize }) => {
  const componentStyle = `" text-white ${
    fontSize || ""
  }  bg-gradient-to-r from-lime-green to-bright-cyan hover:bg-gradient-to-r hover:from-green-300 hover:to-teal-300 px-5 py-2  rounded-full "`;
  return (
    <a href="#" className={componentStyle}>
      Request Invite
    </a>
  );
};
export default RequestInvite;
