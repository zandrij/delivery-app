import { Button, Icon, Link, ListInput, Navbar } from "konsta/react";
import logo from "../../assets/logo/logo.png";
import { Bell, Cart } from "framework7-icons/react";
import { useNavigate } from "react-router-dom";

export const NavbarHome = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar
        className="top-0 sticky"
        translucent={true}
        bgClassName="navbar-bg"
        left={
          <div className="navbar-items">
            <img src={logo} alt="logo" width={38} height={38} />
            <div className="information-navbar">
              <small>Welcome</small>
              <h2>Andri Suarez</h2>
            </div>
          </div>
        }
        right={
          <div className="buttons-navbar">
            <Button
              clear
              rounded
              small
              className="button-navbar"
              onClick={() => navigate("/notification")}
            >
              <Icon
                style={{ color: "#000" }}
                material={<Bell className="w-5 h-5" />}
                ios={<Bell className="w-5 h-5" />}
              />
            </Button>
            <Button
              clear
              rounded
              small
              className="button-navbar"
              onClick={() => navigate("/cart")}
            >
              <Icon
                style={{ color: "#000" }}
                material={<Cart className="w-5 h-5" />}
                ios={<Cart className="w-5 h-5" />}
              />
            </Button>
          </div>
        }
      />
    </>
  );
};
