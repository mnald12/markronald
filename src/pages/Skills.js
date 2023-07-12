
import '../css/skills.css'
import { useSpring, animated } from "react-spring"
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaVuejs, FaPhp, FaNodeJs } from "react-icons/fa";
import { BiLogoFirebase, BiLogoMongodb, BiCoffee } from "react-icons/bi";
import { SiPuppeteer, SiMysql, SiWebrtc, SiSocketdotio, SiBootstrap } from "react-icons/si";
const Number = ({ n }) => {

    const { number } = useSpring({
        from: { number: 0 },
        number: n,
        delay: 200,
        config: { mass: 1, tension: 20, friction: 10 }
    })

    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>
}

const Skills = () => {

    return (
        <>
            <div className="page">
                <div className='page-flex'>
                    <div className='page-left'>
                        <div className='skills-content'>
                            <div className='content-group'>
                                <div className='skills'>
                                    <li><FaHtml5 className="icn" /> HTML <span><Number n={78} /></span><span>%</span></li>
                                    <li><FaCss3Alt className="icn" /> CSS <span><Number n={75} /></span><span>%</span></li>
                                    <li><FaJsSquare className="icn" /> Javascript <span><Number n={72} /></span><span>%</span></li>
                                    <li><SiBootstrap className="icn" /> BootStrap <span><Number n={65} /></span><span>%</span></li>
                                    <li><FaReact className="icn" /> React.js <span><Number n={65} /></span><span>%</span></li>
                                    <li><FaVuejs className="icn" /> Vue.js <span><Number n={56} /></span><span>%</span></li>
                                    <li><FaPhp className="icn" /> PHP <span><Number n={68} /></span><span>%</span></li>
                                    <li><FaNodeJs className="icn" /> Node.js <span><Number n={45} /></span><span>%</span></li>
                                    <li><SiMysql className="icn" /> MySQL <span><Number n={72} /></span><span>%</span></li>
                                    <li><BiLogoMongodb className="icn" /> MongoDb <span><Number n={62} /></span><span>%</span></li>
                                    <li><BiLogoFirebase className="icn" /> Firebase <span><Number n={36} /></span><span>%</span></li>
                                    <li><SiSocketdotio className="icn" /> Socket.io <span><Number n={48} /></span><span>%</span></li>
                                    <li><SiWebrtc className="icn" /> WebRTC <span><Number n={58} /></span><span>%</span></li>
                                    <li><FaNodeJs className="icn" /> Js Plumb <span><Number n={30} /></span><span>%</span></li>
                                    <li><SiPuppeteer className="icn" /> Puppeteer <span><Number n={20} /></span><span>%</span></li>
                                    <li><BiCoffee className="icn" /> Drinking Coffe <span><Number n={100} /></span><span>%</span></li>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='page-right'>
                        <div className='page-title'>
                            <h1>~ MY</h1>
                            <h1>Skills</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills