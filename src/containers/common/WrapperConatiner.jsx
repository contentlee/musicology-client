import { Outlet } from "react-router";
import FooterContainer from "./FooterContainer";
import NavContainer from "./NavContainer";

const WrapperContainer = () => {
  return (
    <>
      <NavContainer />
      <Outlet />
      <FooterContainer />
    </>
  );
};
export default WrapperContainer;
