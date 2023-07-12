import '../css/loader.css'
import loader from '../images/loader.mp4'
const Loader = () => {
    return (
        <>
            <div className="page">
                <div className="loader">
                    {/* <img src={loader} alt='loader'></img> */}
                    <video autoPlay>
                        <source src={loader} type='video/mp4'></source>
                    </video>
                </div>
            </div>
        </>
    )
}

export default Loader