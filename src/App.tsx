import React from 'react';
import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/Personlist';

function App() {
  const personName = {
    first: 'Soumyojyoti',
    last: 'Saha',
  };

  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne',
    },
    {
      first: 'Clark',
      last: 'Kent',
    },
    {
      first: 'Princess',
      last: 'Diana',
    },
  ];

  return (
    <div className="App">
      <Greet name="Vishwas" messageCount={20} isLoggedin={false} />
      <Person name={personName} />
      {nameList.map((name, index) => (
        <Person key={index} name={name} />
      ))}
      <PersonList names={nameList} />
    </div>
  );
}

export default App;
