import "./Header.css";
import profile from "../../assets/images/profile.png";

const Header = () => {
  return (
    <div className="flex items-center my-10 border-b-2 justify-between">
      <h1 className="font-bold text-4xl">Knowledge Cafe</h1>
      <img src={profile} alt="Img" />
    </div>
  );
};

export default Header;
