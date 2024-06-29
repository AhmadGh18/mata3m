import "../css/nav.css";
import { FaBars, FaUser, FaSearch } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [click, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked((old) => !old);
  };

  return (
    <div className="bg-red-500 h-100 w-100">
      <p className="">hello</p>
    </div>
    // <header className="header" id="header">
    //   <nav className="nav container">
    //     <a href="/" className="nav__logo">
    //       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlWQ3yeTwKFe7Yju9Ll4OBhWetZ3CoUi_Jmw&usqp=CAU" />
    //       <span>UniFind.lB</span>
    //     </a>

    //     <div id="nav-menu" className={`${click ? "show-menu" : ""} nav__menu`}>
    //       <ul className="nav__list">
    //         <li className="nav__item">
    //           <a href="/" className="nav__a">
    //             Home
    //           </a>
    //         </li>

    //         <li className="nav__item">
    //           <a href="#" className="nav__a">
    //             About Us
    //           </a>
    //         </li>

    //         <li className="nav__item">
    //           <a href="#" className="nav__a">
    //             Universities
    //           </a>
    //         </li>

    //         <li className="nav__item">
    //           <a href="#" className="nav__a">
    //             Field
    //           </a>
    //         </li>

    //         <li className="nav__item">
    //           <a href="#" className="nav__a">
    //             Contact Me
    //           </a>
    //         </li>
    //       </ul>
    //     </div>

    //     <div className="nav__actions">
    //       <FaSearch className="" />
    //       <FaUser />
    //       <div className="nav__toggle" id="nav-toggle" onClick={handleClick}>
    //         <FaBars />
    //       </div>
    //     </div>
    //   </nav>
    // </header>
  );
};

export default Navbar;
