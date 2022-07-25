import './index.css'

import {AiOutlineHome} from 'react-icons/ai'
import {BiSearchAlt2} from 'react-icons/bi'
import {FaRegNewspaper, FaRegUser} from 'react-icons/fa'
import {BsCardList} from 'react-icons/bs'

const BottomBar = () => (
  <nav className="bottom-bar">
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
    <button type="button">
      <BiSearchAlt2 className="icon" />
    </button>
  </nav>
)

export default BottomBar
