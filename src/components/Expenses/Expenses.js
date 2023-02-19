import React  from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';

const Expenses = (props) => {
  //const [filteredYear, setFilteredYear] = useState('2021');

  const filterChangeHandler = (selectedYear) => {
    props.setFilteredYear(selectedYear);
  };

 /* const filteredExpenses = props.items.filter((expense) => {
    return new Date(expense.date).getFullYear().toString() === filteredYear;
  });*/

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={props.filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={props.filteredExpenses} />
        <ExpensesList items={props.filteredExpenses}
                       expenses={props.expenses}
                       setExpenses={props.setExpenses}
                       />
      </Card>
    </div>
  );
};

export default Expenses;