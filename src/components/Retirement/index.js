import {Line} from 'rc-progress'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import './index.css'

const Retirement = () => (
  <div className="retire-container">
    <div className="rs-container">
      <h1 className="r-heading">Retirement Strategy</h1>
      <p className="para5">Employee Contribution</p>
      <div className="rate-container">
        <Line
          percent={12}
          strokeWidth={2}
          trailColor="#a7d9a9"
          strokeColor="#19486e"
          strokeLinecap="round"
        />
        <p className="para5 para">12%</p>
      </div>

      <p className="para5">Retirement Age</p>
      <div className="rate-container">
        <Line
          percent={65}
          strokeWidth={2}
          trailColor="#a7d9a9"
          strokeColor="#19486e"
          strokeLinecap="round"
        />
        <p className="para5 para">65</p>
      </div>
      <div className="rate-container">
        <p className="para5">Employer Contribution</p>
        <p className="para5">8.4%</p>
      </div>
      <div className="rate-container">
        <p className="para5">Interest Rate</p>
        <p className="para5">5%</p>
      </div>
      <button type="button" className="update-button">
        Update
      </button>
      <button type="button" className="view-more-button">
        View Help Docs
        <span>
          <MdOutlineKeyboardArrowRight />
        </span>
      </button>
    </div>
    <div className="offer-container">
      <p className="house-para">
        Are you considering a{' '}
        <span className="text-span">housing advance?</span>
      </p>
      <p className="l-para">Limited time reduced interest</p>
      <p className="learn-more-button">
        Learn More
        <span>
          <MdOutlineKeyboardArrowRight />
        </span>
      </p>
    </div>
  </div>
)

export default Retirement
