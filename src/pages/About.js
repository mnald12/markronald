import '../css/about.css'
import { useContext } from 'react';
import { Data } from '../App';

const About = () => {

    const { sidebarActive, setSidebarActive, setIsLoader } = useContext(Data)

    return (
        <>
            <div className="page">
                <div className='page-flex'>
                    <div className='page-left'>
                        <div className='about-content'>
                            <div className='content-group'>
                                <h3>Hi There ! </h3>
                                <h4 className='heading1'>My name is Mark Ronald Sicad, Born in june 1995. Living in Bicol, Philippines.</h4>
                                <h4 className='heading2'>I'm a freelance Jr. Web developer, I developed various web based system. But I'm willing to work on any web development projects.</h4>
                                <h4 className='heading3'>I took this field not only for my Professional Career but also as my Passion because I feel a great fulfillment when I create helpful and innovative programs to make people's lives easier and fun.</h4>
                                <h4 className='heading4'>Currently, I am looking for a Work-at-Home job to get regular projects where I can pour my knowledge and skills.</h4>
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