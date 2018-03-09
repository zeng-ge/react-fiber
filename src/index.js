import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Parent from './Parent'

class App extends Component{
  render(){
    return (
      <div className="app-container">
        <Parent/>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'))
