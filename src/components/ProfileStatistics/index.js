import Profile from '../Profile/index'
import Contributions from '../Contributions'
import Retirement from '../Retirement'
import BottomBar from '../BottomBar'
import './index.css'

const ProfileStatistics = () => (
  <div>
    <div className="main-container">
      <Profile />
      <Contributions />
      <Retirement />
    </div>
    <div className="visible-bar">
      <BottomBar />
    </div>
  </div>
)

export default ProfileStatistics
