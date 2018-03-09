import { Component } from 'react'
/*
用来测试父子组件都调用setState时，子组件的render会发生几次
结果证明，在同一个Transaction之内，子组件的render只发生一次，不管子组件是否调用setState都只发生一次
先parent.onclick或者先son.onclick都是先parent.render然后son.render
*/
export default class Son extends Component{
	constructor(props){
    super(props)
    this.state = { counter: 0 }
    this.counter = 0
  }
	onClick = () => {
    console.log('son Click')
    this.setState({counter: ++this.counter}, () => {
      console.log('son set state executed')
    })
    this.props.onClick()
  }
  componentDidMount(){
    console.log('son did mount')
  }
	render(){
    console.log('son render')
    return (
      <div>
        <button onClick={this.onClick}>Son {this.state.counter}</button>
      </div>
    )
  }
}
