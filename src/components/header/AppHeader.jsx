import { NavLink } from "react-router-dom";
import "../../styles/header.css";

export default function AppHeader() {
  const navItems = [
    { label: "Home", path: "/" },
    { label: "Resume", path: "/resume" },
    { label: "Projects", path: "/projects" },
    { label: "Contact", path: "/contact" },
  ];

  return (

    <header className="app-header">

      <div className="app-header-inner">

        <div className="logo">
          .nova
        </div>

        <nav className="app-nav">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `nav-link${isActive ? " active" : ""}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

      </div>

    </header>
  );
}