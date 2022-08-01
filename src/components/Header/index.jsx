import "./main.scss";
import logo from "../../assets/images/logo.svg";
import Navbar from "../Navbar"

const index = () => {
  return (
    <>
      <header className="header">
        <div className="header__container container">

          <a href="#">
            <img src={logo} alt="" />
          </a>

          <Navbar />

          <button className="header__btn">Müşteri Girişi</button>
          
        </div>
      </header>
    </>
  );
};

export default index;
