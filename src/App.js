import React, { useState,useEffect} from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  

  const [expenses, setExpenses] = useState(JSON.parse(localStorage.getItem("list")) || [])
  const [filteredYear, setFilteredYear] = useState('2022')
  
const filteredExpenses = expenses.filter((expense) => {
    return new Date(expense.date).getFullYear().toString() === filteredYear
  });

  
  //JSON.parse(localStorage.getItem("list")) || [] 
  //const filteredExpenses1 =  filteredExpenses.filter(expense=>expense.id!==id)
  
   /*const deleteHandler=(id)=>{
    return   expenses.filter(expense=>expense.id!==id)

   }*/
  
  
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  useEffect(()=>{
    localStorage.setItem("list", JSON.stringify(expenses))
  },[expenses])

 
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses filteredExpenses={filteredExpenses}
                 filteredYear={filteredYear}
                 setFilteredYear={setFilteredYear} 
                 expenses={expenses}
                 setExpenses={setExpenses}
                 />
    </div>
  );
};

export default App;