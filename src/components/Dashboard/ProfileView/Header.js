import { useSelector } from "react-redux";
import { HeaderWrapper } from "../SettingView/Settings.styled";
import { TfiArrowLeft } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const { theme } = useSelector((state) => state.user.userInfo)

  return (
    <HeaderWrapper theme={theme}>
      <div>
        <TfiArrowLeft onClick={() => navigate("/")} className="btn" />
        <h2>Profile</h2>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
