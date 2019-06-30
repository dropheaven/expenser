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
      <div id="expenses-list">
        {this.state.expenses.map(({ id, title, amount, due_date }) => (
          <React.Fragment key={id}>
            <ExpenseItem
              title={title}
              amount={amount}
              dueDate={due_date}
            />
          </React.Fragment>
        ))}
      </div>
    )
  }
}

export default ExpensesList;