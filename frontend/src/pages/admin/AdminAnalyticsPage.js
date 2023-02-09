import AdminLinksComponent from '../../components/admin/AdminLinksComponent'
import { Row, Col, Form } from 'react-bootstrap'

import React, { PureComponent } from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const data = [
  {
    name: '12:00',
    'année 2022': 4000,
    'année 2021': 4100,
  },
  {
    name: '13:00',
    'année 2022r': 4200,
    'année 2021': 4300,
  },
  {
    name: '14:00',
    'année 2022': 4400,
    'année 2021': 4500,
  },
  {
    name: '15:00',
    'année 2022': 4600,
    'année 2021': 4600,
  },
  {
    name: '16:00',
    'année 2022': 4800,
    'année 2021': 5000,
  },
  {
    name: '17:00',
    'année 2022': 5000,
    'année 2021': 5200,
  },
  {
    name: '18:00',
    'année 2022': 5200,
    'année 2021': 5400,
  },
  {
    name: '19:00',
    'année 2022': 5600,
    'année 2021': 6000,
  },
  {
    name: '20:00',
    'année 2022': 6000,
    'année 2021': 6300,
  },
  {
    name: '21:00',
    'année 2022': 6400,
    'année 2021': 7000,
  },
  {
    name: '22:00',
    'année 2022': 6800,
    'année 2021': 7200,
  },
  {
    name: '23:00',
    'année 2022': 7000,
    'année 2021': 7800,
  },
  {
    name: '00:00',
    'année 2022': 7200,
    'année 2021': 8200,
  },
  {
    name: '1:00',
    'année 2022': 7500,
    'année 2021': 8400,
  },
  {
    name: '2:00',
    'année 2022': 7700,
    'année 2021': 9000,
  },
  {
    name: '3:00',
    'année 2022': 8000,
    'année 2021': 9500,
  },
  {
    name: '4:00',
    'année 2022': 8400,
    'année 2021': 10000,
  },
  {
    name: '5:00',
    'année 2022': 9000,
    'année 2021': 12000,
  },
  {
    name: '6:00',
    'année 2022': 10500,
    'année 2021': 17000,
  },
  {
    name: '7:00',
    'année 2022': 16000,
    'année 2021': 20000,
  },
  {
    name: '8:00',
    'année 2022': 17000,
    'année 2021': 21000,
  },
  {
    name: '9:00',
    'année 2022': 17400,
    'année 2021': 22000,
  },
  {
    name: '10:00',
    'année 2022': 17500,
    'année 2021': 23000,
  },
  {
    name: '11:00',
    'année 2022': 17500,
    'année 2021': 23500,
  },
]

/* A function that returns a react component. */
const AdminAnalyticsPage = () => {
  return (
    <Row className='m-5'>
      <Col md={2}>
        <AdminLinksComponent />
      </Col>
      <Col md={10}>
        <h1>Exemple de revenus cumulés.</h1>
        <Form.Group>
          <Form.Label>Première date à comparer</Form.Label>
          <Form.Control type="date" name="firstDateToCompare" placholder="1ère date de comparaison">

          </Form.Control>
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Deuxième date à comparer</Form.Label>
          <Form.Control type="date" name="secondDateToCompare" placholder="2èeme date de comparaison">

          </Form.Control>
        </Form.Group>
        
        <ResponsiveContainer width='100%' height={500}>
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='name' label={{ value: "HEURES", offset: 50, position:"insideBottomRight"}}allowDuplicatedCategory={false} />
            <YAxis label={{value: "REVENUS (en €)" , angle: -90, offset:-10, position:"insideLeft"} } />
            <Tooltip />
            <Legend verticalAlign="top" height={36} />
            <Line
              type='monotone'
              dataKey='année 2021'
              stroke='#8884d8'
              activeDot={{ r: 8 }}
              strokeWidth={4}
            />
            <Line type='monotone' dataKey='année 2022' stroke='#82ca9d'  strokeWidth={4} />
          </LineChart>
        </ResponsiveContainer>
      </Col>
    </Row>
  )
}

/* Exporting the component so that it can be imported in other files. */
export default AdminAnalyticsPage
