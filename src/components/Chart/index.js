import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend} from 'recharts'

const data = [
  {
    name: '20',
    Employer: 20,
    Employee: 40,
    Interest: 70,
  },
  {
    name: '25',
    Employer: 30,
    Employee: 50,
    Interest: 95,
  },
  {
    name: '30',
    Employer: 50,
    Employee: 70,
    Interest: 125,
  },
  {
    name: '35',
    Employer: 70,
    Employee: 100,
    Interest: 150,
  },
  {
    name: '40',
    Employer: 90,
    Employee: 130,
    Interest: 180,
  },
  {
    name: '60',
    Employer: 130,
    Employee: 170,
    Interest: 240,
  },
  {
    name: '65',
    Employer: 160,
    Employee: 250,
    Interest: 325,
  },
]

const Chart = () => {
  const DataFormatter = number => `$${number.toString()}`

  return (
    <BarChart
      width={500}
      height={250}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis tickFormatter={DataFormatter} />
      <Legend position="top" />
      <Bar dataKey="Employer" stackId="a" fill="#020e38" barSize={30} />
      <Bar dataKey="Employee" stackId="a" fill="#3c53a3" barSize={30} />
      <Bar dataKey="Interest" stackId="a" fill="#6c85d9" barSize={30} />
    </BarChart>
  )
}

export default Chart
