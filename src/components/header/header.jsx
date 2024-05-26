import { useState } from "react";
import style from "../header/header.module.css";
import UnoLogo from "../../assets/img/unoLogo.svg";
import iconBars from "../../assets/img/iconBars.svg";
import iconClose from "../../assets/img/iconClose.svg";
const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const links = [
    { name: "INICIO", link: "/" },
    { name: "ONDE ENCONTAR", link: "/" },
    { name: "NOVOS PRODUTOS", link: "/" },
    { name: "CREDITOS", link: "/" },
  ];
  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };
  return (
    <header className={`${style.Header} ${menuActive ? style.active : ""}`}>
      <div className={style.headerWrapper}>
        <div className={style.headerLogo}>
          <img src={UnoLogo} />
        </div>
        <button id={style.buttonMobile} onClick={toggleMenu}>
          <img
            src={menuActive ? iconClose : iconBars}
            id={style.menuIcons}
            alt="Icon Menu"
          />
        </button>
        <nav className={style.headerNav}>
          <ul className={style.ulNav} id={style.Menu}>
            <div className={style.navLiDiv}>
              {links.map((link, index) => (
                <li className={style.navLi} key={link.name}>
                  <a href="/" className={style.linksMenuLi} key={index}>
                    {link.name}
                  </a>
                </li>
              ))}
            </div>
            <div className={style.navLiDiv2}>
              <li>
                <a className={style.loginBtn} href="/">
                  ENTRAR
                </a>
              </li>
              <li>
                <a className={style.cadastroBtn} href="/">
                  CADASTRE-SE
                </a>
              </li>
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
