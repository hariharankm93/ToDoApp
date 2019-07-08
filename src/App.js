import React from 'react';
import Input from './Input';
import axios from 'axios';
import ListComponent from './ListComponent'
import './App.css';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state= {list:[]}
  }
  getData = () =>{
    axios.get('api/todos').then(res => {
      if(res.data){
        this.setState({list : res.data })
      }
    })
  }

  deleteItems=(id)=>{
    axios.delete(`api/todos/${id}`).then(res => {
      if(res.data){
        this.getData();
      }
    }).catch(err => console.log(err))
  }

  componentDidMount(){
    this.getData()  
  }

  addToDo =(e) =>{
    if(e.length){
      this.setState((state,props)=> {return  { list : e}})
    } 
  } 
  render(){
    return(<div className="container">
      <h1>Todo App</h1>
      <div className="sub-container">
      <Input fun={this.addToDo} getData={this.getData}/>
      <ListComponent data={this.state.list} delete={this.deleteItems}/>
      </div>
    </div>)
  }
}


export default App;
