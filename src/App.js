import {Component} from 'react'
import CashWithdrawal from './components/CashWithdrawal'

import './App.css'

const denominationsList = [
  {
    id: 1,
    value: 50,
  },
  {
    id: 2,
    value: 100,
  },
  {
    id: 3,
    value: 200,
  },
  {
    id: 4,
    value: 500,
  },
]

class App extends Component {
  state = {initialValue: 2000}

  onClickValue = () => {
    this.setState(prevState => ({
      initialValue: prevState.initialValue - denominationsList.value,
    }))
  }

  render() {
    const {initialValue} = this.state
    return (
      <div className="balance-card">
        <p className="paragraph">Your Balance</p>
        <p className="paragraph">{initialValue}</p>
        <p className="paragraph">Withdraw</p>
        <p className="paragraph">CHOOSE SUM (IN RUPEES)</p>
        <ul className="ul-container">
          {denominationsList.map(eachBtn => (
            <CashWithdrawal
              key={eachBtn.id}
              eachBtn={eachBtn}
              onClickValue={this.onClickValue}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default App
