// Write your code here

import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import './index.css'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import {IoMdClose} from 'react-icons/io'
import {NavLink} from './styledComponents'

const Header = () => (
  <div className="header-container">
    <Link to="/">
      <img
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
      />
    </Link>

    <div>
      <Popup
        modal
        trigger={
          <button type="button" data-testid="hamburgerIconButton">
            <GiHamburgerMenu />
          </button>
        }
      >
        {close => (
          <>
            <button
              type="button"
              className="trigger-button"
              onClick={() => close()}
              data-testid="closeButton"
            >
              <IoMdClose />
            </button>
            <ul className="popup-container">
              <Link to="/" className="nav-link">
                <li>
                  <AiFillHome />
                  <NavLink>Home</NavLink>
                </li>
              </Link>
              <Link to="/about" className="nav-link">
                <li>
                  <BsInfoCircleFill />
                  <NavLink>About</NavLink>
                </li>
              </Link>
            </ul>
          </>
        )}
      </Popup>
    </div>
  </div>
)

export default Header
