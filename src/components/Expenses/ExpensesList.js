import React  from 'react';

import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = (props) => {

  //const[del,setDel] = useState(props.items)


  if (props.items.length === 0) {
    return <h2 className='expenses-list__fallback'>Found no expenses.</h2>;

  }

 const handleDelete =(id)=>{
   props.setExpenses(props.items.filter(ex=>ex.id !==id))

 }
 console.log(props.items)  
   

  return (
    
     <ul className='expenses-list'>
    {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          
          id={expense.id}
          expense={expense}
          items={props.items}
          handleDelete={handleDelete}
          expenses={props.expenses}
          setExpenses={props.setExpenses}
          
          />
          
      ))}
    </ul>
    
  );
};

export default ExpensesList;