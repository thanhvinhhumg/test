import React from 'react';
import logo from './logo.svg';
import './App.css';
import { CardList } from './component/card-list/card-list.component';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      monsters : []
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(abc => abc.json())
    .then(cef => this.setState({monsters : cef}));
    
  }
  render(){
    return (
      <div className="App">
      <CardList monsters={this.state.monsters} />
    </div>
    ); 
  }
}
export default App;
