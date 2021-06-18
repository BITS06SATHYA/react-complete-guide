import React from 'react'
import './App.css'
import Expenses from './components/Expenses/Expenses'

function App() {
  const expenses = [
    {
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 20),
    },
    {
      title: 'TV',
      amount: 199.99,
      date: new Date(2021, 3, 31),
    },
    {
      title: 'House',
      amount: 894.67,
      date: new Date(2021, 5, 30),
    },
    {
      title: 'Airplane',
      amount: 10994.67,
      date: new Date(2021, 6, 20),
    },
  ]

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, 'Lets get started'),
  //   React.createElement(Expenses, { items: expenses })
  // )

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses}></Expenses>
    </div>
  )
}

export default App
