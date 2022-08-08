/* eslint-disable jsx-a11y/alt-text */
import logo from '../images/logo.png'
import colorlogo from '../images/logo2.png'
const Nav = ({minimal, setShowModal, showModal, setIsSignUp}) => {

    const handleClick = () => {
        setShowModal(true)
        setIsSignUp(false)
    }
    const authToken = false
    return(
        <nav>
            <div className="logo-container">
                <img className="logo" src={minimal ? colorlogo : logo} />
                </div>
                {!authToken && !minimal && <button className="nav-button" onClick={handleClick} 
                disabled={showModal}>Log in</button>}
        </nav>
    )
}
export default Nav