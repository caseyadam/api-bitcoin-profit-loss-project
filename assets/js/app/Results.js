import React, { Component} from 'react'
import ReactDOM from 'react-dom'

export default class Home extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Initialize'
    }
    this.checkGains = this.checkGains.bind(this)
  }
  //google adsense code
  componentDidMount(){
    (adsbygoogle = window.adsbygoogle || []).push({});
  }
  //end adsense
  checkGains(){
    const {percent} = this.props.globalState.totalStatus
    if(this.props.globalState.status == 'gain'){
      return `You made ${percent}% profit`
    } else {
      return `You lost ${percent}% of your initial investment`
    }
  }
  render () {
    const {percent, newCP, newSP} = this.props.globalState.totalStatus
    return (<section id="results">
      <div className="container">
        <div className="col-md-12">
          <div className="ads">
            GOOGLE ADSENSE HERE
            <ins className="adsbygoogle"
                  style={{"display" : "block"}}
                  data-ad-client="ca-pub-xxxxxxxxxx"
                  data-ad-slot="xxxxxxxxxx"
                  data-ad-format="auto"></ins>
          </div>
        </div>
        <div className="col-md-12">
          <h3>Your ${newCP} investment is now </h3>
        <h1>${newSP}</h1>
        <h4>{this.checkGains()}</h4>
        <a href="#" className="main-btn active">
          Create account to keep track of all
        </a>
        <a href="#" className="main-btn" onClick={this.props.goBack}>
          Or check another transaction
        </a>

        </div>
        <div className="col-md-12">
          <div className="ads">
            GOOGLE ADSENSE HERE
            <ins className="adsbygoogle"
                  style={{"display" : "block"}}
                  data-ad-client="ca-pub-xxxxxxxxxx"
                  data-ad-slot="xxxxxxxxxx"
                  data-ad-format="auto"></ins>
          </div>
        </div>
      </div>
    </section>)
  }
}

const app = document.getElementById('app')
