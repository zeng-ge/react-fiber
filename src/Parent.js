import { Component } from 'react'
import Son from './Son'
export default class Parent extends Component{

	onClick(){
    console.log('parent click')
    this.setState({text: 'abc'}, ()=>{
      console.log('parent set state executed')
    })
  }

  componentDidMount(){
    console.log('parent did mount')
  }

	render(){
    console.log('parent render')
    return (
      <div>
        Parent
        <Son onClick={this.onClick.bind(this)}></Son>
      </div>
    )
  }
}
