import {CircularProgressbar, buildStyles} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import Chart from '../Chart'
import './index.css'

const Average = 78
const Top = 95
const mine = 59

const Contributions = () => (
  <div className="contributions-container">
    <p className="retire-para">Retirement Income</p>
    <h1 className="start-des">Starting Year 2056</h1>
    <div className="goal-container">
      <div className="goal-inner-container">
        <h1 className="amount">$300,000</h1>
        <p className="amount-des">My Goal</p>
        <hr className="hor-line" />
      </div>
      <div className="goal-inner-container">
        <h1 className="amount">59%</h1>
        <p className="amount-des">Goal Achieved</p>
        <hr className="hor-line" />
      </div>
      <div className="goal-inner-container">
        <h1 className="amount">$300</h1>
        <p className="amount-des">Est. Monthly Income</p>
        <hr className="hor-line" />
      </div>
    </div>
    <p className="para1">Contribution Overtime</p>
    <Chart />
    <p className="para1">How do I compare to my peers?</p>
    <p className="para2">These numbers represent current goal achievement</p>
    <div className="age-outer-container">
      <div className="age-salary-container">
        <p className="dropper-text">
          Age:{' '}
          <span>
            <select className="age-dropper">
              <option selected value="Under 30">
                Under 30
              </option>
              <option value="30-50">30 - 50</option>
              <option value="Under 30">Above 50</option>
            </select>
          </span>
        </p>
        <hr />
        <p className="dropper-text">
          Salary:{' '}
          <span>
            <select className="age-dropper">
              <option selected value="K 20 - K 30">
                K 20 - K 30
              </option>
              <option value="30-50">K 30 - K 40</option>
              <option value="Under 30">K 40 - K 60</option>
            </select>
          </span>
        </p>
        <hr />
        <p className="dropper-text">
          Gender:{' '}
          <span>
            <select className="age-dropper">
              <option selected value="Male">
                Male
              </option>
              <option value="Female">Female</option>
            </select>
          </span>
        </p>
        <hr />
      </div>
      <div className="radial-graph-container">
        <div style={{width: 75, height: 75}} className="radial-graph">
          <CircularProgressbar
            value={Average}
            text={`${Average}%`}
            styles={buildStyles({
              strokeLinecap: 'butt',
              pathColor: `#338754`,
              textColor: '#000000',
              trailColor: '#d6d6d6',
            })}
          />
          <p className="para5">Average</p>
        </div>
        <div style={{width: 75, height: 75}} className="radial-graph">
          <CircularProgressbar
            value={Top}
            text={`${Top}%`}
            styles={buildStyles({
              strokeLinecap: 'butt',
              pathColor: `#338754`,
              textColor: '#000000',
              trailColor: '#d6d6d6',
            })}
          />
          <p className="para5">Top</p>
        </div>
        <div style={{width: 75, height: 75}} className="radial-graph">
          <CircularProgressbar
            value={mine}
            text={`${mine}%`}
            styles={buildStyles({
              strokeLinecap: 'butt',
              pathColor: `#338754`,
              textColor: '#000000',
              trailColor: '#d6d6d6',
            })}
          />
          <p className="para5">Me</p>
        </div>
      </div>
    </div>
  </div>
)

export default Contributions
