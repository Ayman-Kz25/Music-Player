import { Link, useLocation } from "react-router-dom"

function SidebarBtn(props) {
    const location = useLocation();
    const isActive = location.pathname === props.to;
  return (
    <Link to={props.to}>
        <div className={`sidebar-items ${isActive ? "active" : ""}`}>
            <span className="sidebar-icon">{props.icon}</span>
            <span className="sidebar-item">{props.title}</span>
        </div>
    </Link>
  )
}

export default SidebarBtn