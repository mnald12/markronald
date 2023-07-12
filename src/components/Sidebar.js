import '../css/sidebar.css'
import { BsInfoCircleFill, BsTools, BsFillBoxSeamFill, BsTelephoneInboundFill } from "react-icons/bs";
import { useContext } from 'react';
import { Data } from '../App';

const Sidebar = () => {

    const { sidebarActive, setSidebarActive, setIsLoader } = useContext(Data)

    return (
        <div className="sidebar">
            <div className="button-lists">
                <button
                    onClick={() => {
                        setSidebarActive('about')
                        setIsLoader(true)
                    }}
                    className={sidebarActive === 'about' ? 'active' : ''}
                >
                    <BsInfoCircleFill className='icon' />
                    <div>About</div>
                </button>
                <button
                    onClick={() => {
                        setSidebarActive('skill')
                        setIsLoader(true)
                    }}
                    className={sidebarActive === 'skill' ? 'active' : ''}
                >
                    <BsTools className='icon' />
                    <div>Skills</div>
                </button>
                <button
                    onClick={() => {
                        setSidebarActive('project')
                        setIsLoader(true)
                    }}
                    className={sidebarActive === 'project' ? 'active' : ''}
                >
                    <BsFillBoxSeamFill className='icon' />
                    <div>Projects</div>
                </button>
                <button
                    onClick={() => {
                        setSidebarActive('contact')
                        setIsLoader(true)
                    }}
                    className={sidebarActive === 'contact' ? 'active' : ''}
                >
                    <BsTelephoneInboundFill className='icon' />
                    <div>Contacts</div>
                </button>
            </div>
        </div>
    )
}

export default Sidebar