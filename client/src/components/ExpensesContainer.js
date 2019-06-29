import React from 'react';

class ExpensesContainer extends React.Component {
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
        console.log(this.state.expenses)
      })
  }

  render() {
    return (
      <div>
        Expenses
        <ul>
          {this.state.expenses.map(expense => <li key={expense.id}>{expense.title}</li>)}
        </ul>
      </div>
    )
  }
}

export default ExpensesContainer;