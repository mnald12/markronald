import '../css/nav.css'
import logo from '../images/mnald.png'
import mnald from '../resume/mnald12.pdf'
import { BsGithub, BsLinkedin, BsDownload } from "react-icons/bs";
const Nav = () => {
    return (
        <div className="navbar">
            <div className="nav-brand">
                <img src={logo} alt='logo' />
            </div>
            <div className="nav-actions">
                <div className="nav-btn">
                    <a href='https://github.com/mnald12'> <BsGithub className='icon' /> <span>Github</span></a>
                </div>
                <div className="nav-btn">
                    <a href='https://www.linkedin.com/in/mark-ronald-sicad-334a3422b'> <BsLinkedin className='icon' /><span>Linkedin</span></a>
                </div>
                <div className="nav-btn">
                    <a href={mnald} target="_blank" rel="noreferrer"> <BsDownload className='icon' /><span>Resume</span></a>
                </div>
            </div>
        </div>
    )
}

export default Nav