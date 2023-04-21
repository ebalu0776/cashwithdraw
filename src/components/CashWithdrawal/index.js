const CashWithdrawal = props => {
  const {onClickValue, eachBtn} = props

  const onClickBtn = () => {
    onClickValue(eachBtn.value)
  }
  return (
    <li className="list-btn">
      <div>
        <button type="button" onClick={onClickBtn}>
          {eachBtn.value}
        </button>
      </div>
    </li>
  )
}

export default CashWithdrawal
