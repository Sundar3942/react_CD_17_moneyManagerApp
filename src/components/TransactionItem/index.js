import './index.css'

const TransactionItem = props => {
  const {transactionDetails, deleteHandler} = props
  const {id, title, amount, type} = transactionDetails
  const onDelete = () => {
    deleteHandler(id, type, amount)
  }

  return (
    <li className="list-item">
      <p className="list-title">{title}</p>
      <p className="list-amount">{amount}</p>
      <p className="list-type">{type}</p>
      <button
        data-testid="delete"
        type="button"
        className="transaction-item-btn"
        onClick={onDelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          className="delete"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem
