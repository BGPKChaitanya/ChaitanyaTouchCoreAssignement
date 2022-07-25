import Chart from '../Chart'
import CircleProgressBar from '../CircleProgressBar'
import './index.css'

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
      <div className="goal-inner-container2">
        <h1 className="amount">59%</h1>
        <p className="amount-des">Goal Achieved</p>
        <hr className="hor-line" />
      </div>
      <div className="goal-inner-container2">
        <h1 className="amount">$300</h1>
        <p className="amount-des">Est. Monthly Income</p>
        <hr className="hor-line" />
      </div>
    </div>
    <p className="para1 contribute">Contribution Overtime</p>
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
        <CircleProgressBar value={78} name="Average" />
        <CircleProgressBar value={95} name="Top" />
        <CircleProgressBar value={59} name="Me" />
      </div>
    </div>
  </div>
)

export default Contributions
