import Profile from '../Profile/index'
import SideBar from '../SideBar/index'
import Contributions from '../Contributions'
import Retirement from '../Retirement'
import './index.css'

const ProfileStatistics = () => (
  <div className="main-container">
    <SideBar />
    <Profile />
    <Contributions />
    <Retirement />
  </div>
)

export default ProfileStatistics
