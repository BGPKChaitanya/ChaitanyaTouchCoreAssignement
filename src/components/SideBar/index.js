import './index.css'
import {GiHummingbird} from 'react-icons/gi'
import {AiOutlineHome} from 'react-icons/ai'
import {BiSearchAlt2} from 'react-icons/bi'
import {FaRegNewspaper, FaRegUser, FaRegBell} from 'react-icons/fa'
import {BsCardList, BsBoxArrowRight} from 'react-icons/bs'

const Sidebar = () => (
  <div className="sidebar-container">
    <div className="search-container">
      <button type="button">
        <GiHummingbird className="icon" />
      </button>
      <button type="button">
        <BiSearchAlt2 className="icon" />
      </button>
    </div>
    <div className="home-container">
      <button type="button">
        <AiOutlineHome className="icon" />
      </button>
      <button type="button">
        <FaRegNewspaper className="icon" />
      </button>
      <button type="button">
        <BsCardList className="icon" />
      </button>
      <button type="button">
        <FaRegUser className="icon" />
      </button>
    </div>
    <div className="bell-container">
      <button type="button">
        <FaRegBell className="icon" />
      </button>
      <button type="button">
        <BsBoxArrowRight className="icon" />
      </button>
    </div>
  </div>
)

export default Sidebar
