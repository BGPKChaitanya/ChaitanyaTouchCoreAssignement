import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from 'recharts'

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
    <ResponsiveContainer height={250} width="100%">
      <BarChart data={data} margin={5}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="name"
          tick={{
            stroke: '#000000',
            strokeWidth: 0.5,
            fontSize: 10,
          }}
        />
        <YAxis
          tickFormatter={DataFormatter}
          tick={{
            stroke: '#000000',
            strokeWidth: 0.5,
            fontSize: 10,
          }}
        />
        <Legend position="top" wrapperStyle={{fontSize: 13}} />
        <Bar dataKey="Employer" stackId="a" fill="#020e38" barSize={25} />
        <Bar dataKey="Employee" stackId="a" fill="#3c53a3" barSize={25} />
        <Bar dataKey="Interest" stackId="a" fill="#6c85d9" barSize={25} />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default Chart
