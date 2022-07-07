
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faMagnifyingGlass,
  faArrowRightFromBracket,
  faUser
} from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  return (
    <div className="navbar-container">
        {/* <div className="search-section">
         <input className="search-box" type="text" placeholder="Search..." />
         <button className="search-btn">
          <FontAwesomeIcon className="magnifying-glass" icon={faMagnifyingGlass} />
         </button>
         
        </div> */}
        <div className="auth-section">
          <FontAwesomeIcon className="auth-section-icon-user" icon={faUser} />
          <FontAwesomeIcon className="auth-section-icon-arrow" icon={faArrowRightFromBracket} />
            
          
        </div>
    </div>
  )
}

export default Navbar;