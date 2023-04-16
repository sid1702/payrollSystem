import React from "react";
import { useNavigate } from "react-router-dom";

function SidebarMenus({ menu }) {
  const navigate = useNavigate();
  const [toggleArrow, setToggleArrow] = React.useState(false);

  const handleToggleArrow = () => setToggleArrow(!toggleArrow);
  return (
    <>
      <div onClick={handleToggleArrow} className="menuItems">
        <div className="menuTitle">{menu.title}</div>
        <div className="menuIcon">
          {menu.submenu && toggleArrow
            ? menu.iconUp
            : menu.submenu
            ? menu.iconDown
            : null}
        </div>
      </div>
      <div>
        {toggleArrow &&
          menu.submenu.map((option, index) => {
            return (
              <div
                className="submenus"
                key={index}
                onClick={() => navigate(option.link)}
              >
                {option.title}
              </div>
            );
          })}
      </div>
    </>
  );
}

export default SidebarMenus;
