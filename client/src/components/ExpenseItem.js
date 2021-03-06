import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const ExpenseItem = ({ title, amount, dueDate }) => {
  return (
    <div className="card border-dark m-2 text-center" id="expense-card">
      <div className="card-header bg-transparent border-dark">{title}</div>
      <div className="card-body">
        <h4 className="card-title">${amount}</h4>
        <p className="card-text">Due on {moment(dueDate).format("MMM Do, YYYY")}</p>
      </div>
      <div className="card-footer bg-transparent border-dark">
        <Link to={`/expenses/${title}`}>
          <button type="button" className="btn btn-primary" id="primary-button">details</button>
        </Link>
        <Link to={`/expenses/${title}/edit`}>
          <button type="button" className="btn btn-primary" id="primary-button">edit</button>
        </Link>
      </div>
    </div>
  )
}

export default ExpenseItem;