import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    type: transactionTypeOptions[0].displayText,
    transactionList: [],
    totalBalance: 0,
    totalIncome: 0,
    totalExpenses: 0,
  }

  titleChangeHandler = e => {
    this.setState({title: e.target.value})
  }

  amountChangeHandler = e => {
    this.setState({amount: e.target.value})
  }

  typeChangeHandler = e => {
    console.log(e.target.value)
    this.setState({type: e.target.value})
  }

  submitHandler = e => {
    e.preventDefault()
    const {title, type} = this.state
    let {amount} = this.state
    amount = parseInt(amount)
    console.log(amount)

    const newObject = {id: uuidv4(), title, amount, type}
    let income = 0
    let expense = 0
    if (type === 'Income') {
      income = amount
    } else {
      expense = amount
    }
    this.setState(prevState => ({
      title: '',
      amount: '',
      type: prevState.type,
      transactionList: [...prevState.transactionList, newObject],
      totalBalance: prevState.totalBalance + income - expense,
      totalIncome: prevState.totalIncome + income,
      totalExpenses: prevState.totalExpenses + expense,
    }))
  }

  deleteHandler = (id, type, amount) => {
    let income = 0
    let expenses = 0
    if (type === 'Income') {
      income = amount
    } else {
      expenses = amount
    }
    this.setState(prevState => {
      const newTransactionList = prevState.transactionList.filter(
        each => each.id !== id,
      )
      console.log(newTransactionList)

      return {
        totalBalance: prevState.totalBalance - income + expenses,
        totalIncome: prevState.totalIncome - income,
        totalExpenses: prevState.totalExpenses - expenses,
        transactionList: newTransactionList,
      }
    })
  }

  render() {
    const {title, amount, type, transactionList} = this.state
    const {totalBalance, totalIncome, totalExpenses} = this.state
    const moneyDetails = {totalBalance, totalIncome, totalExpenses}

    return (
      <div className="page">
        <div className="welcome-card">
          <h1 className="welcome-card-heading">Hi, Richard</h1>
          <p className="welcome-card-para">
            Welcome Back to Your <span>Money Manager</span>
          </p>
        </div>
        <MoneyDetails moneyDetails={moneyDetails} />
        <div className="form-and-transaction-container">
          <div className="form-container">
            <h2>Add Transaction</h2>
            <form onSubmit={this.submitHandler}>
              <label htmlFor="titleInput">TITLE</label>
              <br />
              <input
                id="titleInput"
                type="text"
                className="input"
                placeholder="TITLE"
                onChange={this.titleChangeHandler}
                value={title}
              />
              <br />
              <br />
              <label htmlFor="amountInput">AMOUNT</label>
              <br />
              <input
                id="amountInput"
                type="text"
                className="input"
                placeholder="AMOUNT"
                onChange={this.amountChangeHandler}
                value={amount}
              />
              <br />
              <br />
              <label htmlFor="typeInput">TYPE</label>
              <br />
              <select
                id="typeInput"
                className="input"
                onChange={this.typeChangeHandler}
                value={type}
              >
                {transactionTypeOptions.map(each => (
                  <option key={each.optionId} value={each.optionId}>
                    {each.displayText}
                  </option>
                ))}
              </select>
              <br />
              <br />
              <button type="submit" className="btn">
                Add
              </button>
            </form>
          </div>
          <div className="transaction-container">
            <h2>History</h2>
            <div className="list-item">
              <p className="list-title-head">Title</p>
              <p className="list-amount-head">Amount</p>
              <p className="list-type-head">Type</p>
            </div>
            <ul type="none" className="transaction-list">
              {transactionList.map(each => (
                <TransactionItem
                  deleteHandler={this.deleteHandler}
                  transactionDetails={each}
                  key={each.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
