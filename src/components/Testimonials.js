import '../css/testimonials.css'
import { FaQuoteLeft } from "react-icons/fa6";
const Testimonials = () => {
    return (
        <>
            <div className='header'>
                <h3>Testimonials</h3>
            </div>
            <div className='testimonials'>
                <div className='testi'>
                    <div><h3><FaQuoteLeft /></h3></div>
                    <div>
                        <p>Working with Mark Ronald was a game-changer for our company. His web development expertise took our website to the next level. <small><b>Engr. Jerome Ebuenga</b></small></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonials