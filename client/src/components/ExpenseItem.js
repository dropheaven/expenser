import React, { Fragment } from 'react';

const ExpenseItem = ({ title, amount, dueDate }) => {
  return (
    <Fragment>
      <p>title: {title}</p>
      <p>amount: {amount}</p>
      <p>due date: {dueDate}</p>
    </Fragment>
  )
}

export default ExpenseItem;