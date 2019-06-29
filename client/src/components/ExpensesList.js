import React from 'react';
import ExpenseItem from './ExpenseItem';

class ExpensesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expenses: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:3001/api/v1/expenses")
      .then(response => response.json())
      .then(expenses => {
        this.setState({ expenses })
      })
  }

  render() {
    return (
      <div>
        Expenses
        <ul>
          {this.state.expenses.map(({ id, title, amount, due_date }) => (
            <li key={id}>
              <ExpenseItem
                title={title}
                amount={amount}
                dueDate={due_date}
              />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default ExpensesList;