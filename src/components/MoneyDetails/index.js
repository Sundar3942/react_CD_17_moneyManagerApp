// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {moneyDetails} = props
  const {totalBalance, totalIncome, totalExpenses} = moneyDetails

  return (
    <ul className="money-details-container" type="none">
      <li className="money-details-item item1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          className="money-details-item-image"
          alt="balance"
        />
        <div>
          <p>Your Balance</p>
          <p data-testid="balanceAmount" className="amount">
            Rs {totalBalance}
          </p>
        </div>
      </li>
      <li className="money-details-item item2">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          className="money-details-item-image"
          alt="income"
        />
        <div>
          <p>Your Income</p>
          <p data-testid="incomeAmount" className="amount">
            Rs {totalIncome}
          </p>
        </div>
      </li>
      <li className="money-details-item item3">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          className="money-details-item-image"
          alt="expenses"
        />
        <div>
          <p>Your Expenses</p>
          <p data-testid="expensesAmount" className="amount">
            Rs {totalExpenses}
          </p>
        </div>
      </li>
    </ul>
  )
}

export default MoneyDetails
