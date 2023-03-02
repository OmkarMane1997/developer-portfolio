import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";
import "./HeaderPage.css";

function HeaderPage() {
  const mobile = window.innerWidth <= 768 ? true : false;
  console.log(mobile)
  return <>{mobile === true ? <MobileHeader /> : <DesktopHeader />}</>;
}

export default HeaderPage;
