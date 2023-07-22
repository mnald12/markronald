import '../css/about.css'
import { useContext } from 'react';
import { Data } from '../App';
import { abouts } from '../data/about'
const About = () => {

    const { sidebarActive, setSidebarActive, setIsLoader } = useContext(Data)

    return (
        <>
            <div className="page">
                <div className='page-flex'>
                    <div className='page-left'>
                        <div className='about-content'>
                            <div className='content-group'>
                                <h3>{abouts[0]}</h3>
                                {
                                    abouts[1].map((about, id) => (
                                        <h4 className={'heading' + id} key={id}>{about}</h4>
                                    ))
                                }
                                <div className='buttons'>
                                    <button
                                        onClick={() => {
                                            setSidebarActive('contact')
                                            setIsLoader(true)
                                        }}
                                        className={sidebarActive === 'contact' ? 'active' : ''}
                                    >
                                        <div>Contact Me</div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='page-right'>
                        <div className='page-title'>
                            <h1>ABOUT</h1>
                            <h1>ME ~</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About