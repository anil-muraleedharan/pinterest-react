import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import PinPage from './components/PinPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from 'react-router-dom';

const pinsData = [
  {
    id: 1,
    title: 'Sachin Tendulkar',
    description: 'A HD picture of great cricketer Sachin Tendulkar',
    time: 1600719952353,
    imageSrc:
      'https://i.pinimg.com/originals/ba/b4/a8/bab4a86494a8b0c8ee4ef6caa5cb5d9b.jpg',
  },
  {
    id: 2,
    title: 'Sachin Tendulkar',
    description: 'A HD picture of great cricketer Sachin Tendulkar',
    time: 1600719952353,
    imageSrc:
      'https://i.pinimg.com/originals/ba/b4/a8/bab4a86494a8b0c8ee4ef6caa5cb5d9b.jpg',
  },
  {
    id: 3,
    title: 'Sachin Tendulkar',
    description: 'A HD picture of great cricketer Sachin Tendulkar',
    time: 1600719952353,
    imageSrc: 'https://i.ytimg.com/vi/V1RPi2MYptM/maxresdefault.jpg',
  },
  {
    id: 4,
    title: 'Sachin Tendulkar',
    description: 'A HD picture of great cricketer Sachin Tendulkar',
    time: 1600719952353,
    imageSrc:
      'https://i.pinimg.com/originals/ba/b4/a8/bab4a86494a8b0c8ee4ef6caa5cb5d9b.jpg',
  },
  {
    id: 5,
    title: 'Sachin Tendulkar',
    description: 'A HD picture of great cricketer Sachin Tendulkar',
    time: 1600719952353,
    imageSrc:
      'https://i.pinimg.com/originals/ba/b4/a8/bab4a86494a8b0c8ee4ef6caa5cb5d9b.jpg',
  },
  {
    id: 6,
    title: 'Sachin Tendulkar',
    description: 'A HD picture of great cricketer Sachin Tendulkar',
    time: 1600719952353,
    imageSrc: 'https://i.ytimg.com/vi/V1RPi2MYptM/maxresdefault.jpg',
  },
  {
    id: 7,
    title: 'Sachin Tendulkar',
    description: 'A HD picture of great cricketer Sachin Tendulkar',
    time: 1600719952353,
    imageSrc:
      'https://i.pinimg.com/originals/ba/b4/a8/bab4a86494a8b0c8ee4ef6caa5cb5d9b.jpg',
  },
  {
    id: 8,
    title: 'Sachin Tendulkar',
    description: 'A HD picture of great cricketer Sachin Tendulkar',
    time: 1600719952353,
    imageSrc:
      'https://i.pinimg.com/originals/ba/b4/a8/bab4a86494a8b0c8ee4ef6caa5cb5d9b.jpg',
  },
  {
    id: 9,
    title: 'Sachin Tendulkar',
    description: 'A HD picture of great cricketer Sachin Tendulkar',
    time: 1600719952353,
    imageSrc: 'https://i.ytimg.com/vi/V1RPi2MYptM/maxresdefault.jpg',
  },
  {
    id: 10,
    title: 'Sachin Tendulkar',
    description: 'A HD picture of great cricketer Sachin Tendulkar',
    time: 1600719952353,
    imageSrc:
      'https://i.pinimg.com/originals/ba/b4/a8/bab4a86494a8b0c8ee4ef6caa5cb5d9b.jpg',
  },
  {
    id: 11,
    title: 'Sachin Tendulkar',
    description: 'A HD picture of great cricketer Sachin Tendulkar',
    time: 1600719952353,
    imageSrc:
      'https://i.pinimg.com/originals/ba/b4/a8/bab4a86494a8b0c8ee4ef6caa5cb5d9b.jpg',
  },
  {
    id: 12,
    title: 'Sachin Tendulkar',
    description: 'A HD picture of great cricketer Sachin Tendulkar',
    time: 1600719952353,
    imageSrc: 'https://i.ytimg.com/vi/V1RPi2MYptM/maxresdefault.jpg',
  },
  {
    id: 13,
    title: 'Sachin Tendulkar',
    description: 'A HD picture of great cricketer Sachin Tendulkar',
    time: 1600719952353,
    imageSrc:
      'https://i.pinimg.com/originals/ba/b4/a8/bab4a86494a8b0c8ee4ef6caa5cb5d9b.jpg',
  },
  {
    id: 14,
    title: 'Sachin Tendulkar',
    description: 'A HD picture of great cricketer Sachin Tendulkar',
    time: 1600719952353,
    imageSrc:
      'https://i.pinimg.com/originals/ba/b4/a8/bab4a86494a8b0c8ee4ef6caa5cb5d9b.jpg',
  },
  {
    id: 15,
    title: 'Sachin Tendulkar',
    description: 'A HD picture of great cricketer Sachin Tendulkar',
    time: 1600719952353,
    imageSrc: 'https://i.ytimg.com/vi/V1RPi2MYptM/maxresdefault.jpg',
  },
];

const PinPageRoute = () => {
  const { id } = useParams();
  return <PinPage pinData={pinsData.find((pinData) => pinData.id === +id)} />;
};

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Dashboard pinsData={pinsData} />
          </Route>
          <Route exact path='/pin/:id'>
            <PinPageRoute />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
