import {v4 as uuidv4} from 'uuid'
import {GoTriangleDown} from 'react-icons/go'
import SideBar from '../SideBar'
import './index.css'

const Data = [
  {
    id: uuidv4(),
    date: '2020-08-07',
    content: 'Withdrawal Transfer to Bank-XXX11',
  },
  {
    id: uuidv4(),
    date: '2020-07-21',
    content: 'Withdrawal Transfer to Bank-XXX11',
  },
  {
    id: uuidv4(),
    date: '2020-07-16',
    content: 'Withdrawal Transfer to Bank-XXX11',
  },
]

const Profile = () => {
  const transactions = () => (
    <div>
      {Data.map(each => (
        <li className="list-item" key={each.id}>
          <p className="para2">{each.date}</p>
          <p className="para3">{each.content}</p>
          <hr />
        </li>
      ))}
    </div>
  )

  return (
    <>
      <div className="profile-container">
        <div className="side-bar-container">
          <SideBar />
        </div>
        <div className="profile-bar">
          <div className="profile-data-container">
            <img
              src="https://res.cloudinary.com/dwp6uyiir/image/upload/v1658639942/pexels-pixabay-220453_ogu8gj.jpg"
              alt="profile"
              className="profile"
            />
            <div>
              <h1 className="profile-name">Hi Mike,</h1>
              <p className="profile-des">Welcome Back.</p>
            </div>
          </div>
          <p className="para1">Today</p>
          <h1 className="amount-heading">$19,892</h1>
          <p className="para2">Account Balance</p>
          <p className="para1">$4,000</p>
          <p className="para2">Year-to-Date Contributions</p>
          <p className="para1">$1,892</p>
          <p className="para2">Total Interest</p>
          <button type="button" className="want-button">
            I Want to{' '}
            <span>
              <GoTriangleDown />
            </span>
          </button>
          <p className="para1">Recent Transactions</p>
          <ul className="list-container">{transactions()}</ul>
        </div>
      </div>
    </>
  )
}

export default Profile
