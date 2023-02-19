import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
import ExpenseDelete from './ExpenseDelete';

const ExpenseItem = (props) => {
  return (
    <li>
      <Card className='expense-item'>
      <ExpenseDate date={props.date} />
        
        <div className='expense-item__description'>
          <h2>{props.title}</h2>
          <div className='expense-item__price'>${props.amount}</div>
        </div>
        
        
        <ExpenseDelete id= {props.id} 
                       
                       items={props.items}
                       expense={props.expense}
                       handleDelete ={props.handleDelete}
                       setExpenses={props.setExpenses}
          
                       />
      </Card>
    </li>
  );
};

export default ExpenseItem;