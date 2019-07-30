//just a styled 30 second time bar


//Just a concept


import React from "react";

class Timebar extends React.Component {
    constructor (props) {
      super(props)
      this.state = {count: 30}
    }
    componentWillUnmount () {
      clearInterval(this.Timebar)
    }
    tick () {
      this.setState({count: (this.state.count - 1)})
    }
    startTimer () {
      clearInterval(this.Timebar)
      this.timer = setInterval(this.tick.bind(this), 1000)
    }
    stopTimer () {
      clearInterval(this.timer)
    }
    resetTimer () {
        this.setState({count: (this.setState.count = 30 )})
        console.log('firing in reset');
      }
    render () {
      return (
        <div className='timer'>
          <h1>{this.state.count}</h1>
          <div>
            <button onClick={this.startTimer.bind(this)}>Start</button>
            <button onClick={this.stopTimer.bind(this)}>Stop</button>
            <button onClick={this.resetTimer.bind(this)}>Reset</button>
          </div>
        </div>
      )
    }
  }

export default Timebar