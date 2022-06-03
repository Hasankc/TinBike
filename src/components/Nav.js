/* eslint-disable jsx-a11y/alt-text */
import logo from '../images/logo.png'
import colorlogo from '../images/logo2.png'

const Nav = ({minimal, authToken}) => {

    return(
        <nav>
            <div className="logo-container"></div>
                <img className="logo" src={minimal ? colorlogo : logo} />
                
                {!authToken && !minimal && <button className="nav-button">Log in</button>}
        </nav>
    )
}
export default Nav