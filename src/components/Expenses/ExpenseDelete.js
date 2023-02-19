import React from 'react';
import './ExpenseDelete.css'



const ExpenseDelete = (props) => {
    
       
    
    


    

console.log(props.expense.id)
//console.log(props.id)

    return (
    <div>
        <button onClick={()=>props.handleDelete(props.expense.id)} className='new-expense__actions1'>Delete</button>
    </div>
  )
};

export default ExpenseDelete