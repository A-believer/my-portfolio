import { Link, NavLink } from "react-router-dom";
import "./index.scss";
import LogoS from "../../assets/images/logo-s.png"
import LogoSubtitle from "../../assets/images/logo_sub.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";


const Sidebar = () => {
    return (
        <div className="nav-bar">
            <Link className="logo">
                <img src={LogoS} alt="logo" />
                <img className="sub-logo" src={LogoSubtitle} alt="slobodan" />
            </Link>
            <nav>
                <NavLink exact="true" activeclassname="active" to='/'>
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to='/about'>
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" className="contact-link"  activeclassname="active" to='/contact'>
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
            </nav>

            <ul>
                <li>
                    <a target="_blank" rel="noreferrer"  href="https://www.linkedin.com/in/thedavid-ao">
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer"  href="https://t.co/imByiuNAwM">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </li>
                 <li>
                    <a target="_blank" rel="noreferrer"  href="https://twitter.com/A_believer007">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;