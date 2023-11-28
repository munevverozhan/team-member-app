import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <ul className="navbar">
            <li className="list-item"> <Link to="/"  className="nav-link">Home</Link></li>
            <li className="list-item"> <Link to="/GroupedTeamMembers"  className="nav-link">Teams</Link></li>
        </ul>
    );
}
export default Nav;