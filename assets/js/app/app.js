import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import axios from 'axios'
import Home from './Home.js'
import Results from './Results.js'


class Layout extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe',
      location: 'home',
      date: moment(),
      data: ''
      cryptoAmount: ''
    }
    //the (this) allows access to the routingSystem inside the Class. *Fake a Routing System video*
    this.routingSystem = this.routingSystem.bind(this)
    this.handleDateChange = this.handleDateChange.bind(this)
    this.apiCall = this.apiCall.bind(this)
    this.onInputChange = this.onInputChange.bind(this)
}
    componentWillMount() {
      var self=this;
      axios.get(`https://min-api.cryptocompare.com/data/pricehistorical?fsym=BTC&tsyms=BTC,USD,EUR&ts=${moment().unix()}&extraParams=crypto_profits_cp`)
      .then(function (response) {
        self.setState({
          btcToday: response.data.BTC
        }, () => {
          console.log(self.state);
        })
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  routingSystem(){
    switch(this.state.location) {
      case 'home':
          return <Home handleDateChange = {this.handleDateChange}
            globalState={this.state}
            onInputChange={this.onInputChange}/>
          break;
      case 'results':
          return <Results />
          break;
      default:
          return <Home />
  }
}
handleDateChange(date) {
    this.setState({
      date: date
    }, () => console.log(this.state.date.unix()));
  }
  onInputChange(event){
    this.setState({
      cryptoAmount: event.target.value
    })
  }
  apiCall(){
    //
    var self = this;
    axios.get('https://min-api.cryptocompare.com/data/pricehistorical?fsym=BTC&tsyms=BTC,USD,EUR&ts=1513311738&extraParams=crypto_profits_cp')
    .then(function (response) {
      self.setState({
        data: response.data.BTC
      }, () => {
        console.log(self.state);
        const CP = self.state.data.USD
        const SP = self.state.btcToday.USD;
        if(CP < SP) {
          var gain = SP - CP
          var gainPercent = (gain/CP) * 100
          gainPercent = gainPercent.toFixed(2)
          console.log(`profit percent is ${gainPercent}`)
        } else {
          var loss = CP - SP
          var lossPercent = (loss/CP) * 100
          lossPercent = gainPercent.toFixed(2)
          console.log(`loss percent is ${lossPercent}`)
        }
      })
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render () {
    return (<div className='home'>
      <div className="container">
        <header>
          <div className="logo" onClick={this.apiCall}>
            Crypto Profits
          </div>
          <nav className="menu">
            <a href="#" className="main-btn">Register</a>
          </nav>
        </header>

        {this.routingSystem()}
      </div>
    </div>)
  }
}

ReactDOM.render(<Layout />, app)
