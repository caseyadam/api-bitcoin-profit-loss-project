import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import DatePicker from 'react-datepicker'
import moment from 'moment'

export default class Home extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Initialize'
    }
  }
  render () {
    return (<section id='home'>
      <div className='container'>
        <div className="col-md-6">
          <img src="/img/bitcoin_image.png" className="bitcoin-logo"/>
        </div>
        <div className="col-md-6">
          <h2>Enter Transaction</h2>

          <label>Bitcoin Amount</label>
        <input type="text" name="amount" onChange={this.props.onInputChange} value={this.props.globalState.cryptoAmount}/>

          <label>Date</label>
          <DatePicker selected={this.props.globalState.date}
          onChange={this.props.handleDateChange}/>

        <button type="submit" onClick={this.props.checkProfits}>Check Profits/Loss</button>
        </div>
      </div>

    </section>)
  }
}

const app = document.getElementById('app')
