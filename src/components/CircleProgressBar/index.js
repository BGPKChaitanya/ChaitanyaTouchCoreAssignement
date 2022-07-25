import {CircularProgressbar, buildStyles} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import './index.css'

const CircleProgressBar = props => {
  const {value, name} = props
  return (
    <div style={{width: 75, height: 75}} className="radial-graph">
      <CircularProgressbar
        value={value}
        text={`${value}%`}
        styles={buildStyles({
          strokeLinecap: 'butt',
          pathColor: `#338754`,
          textColor: '#000000',
          trailColor: '#d6d6d6',
        })}
      />
      <p className="para5">{name}</p>
    </div>
  )
}

export default CircleProgressBar
