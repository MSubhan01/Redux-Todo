import React, { Component } from 'react';
import './App.css';
import List from './List';
import TodoMiddleware from '../../store/middlewares/TodoMiddleware';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    todoState: state.TodoListReducer.List,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    addList: () => dispatch(TodoMiddleware.firebaseRender()),
    addTodo: (todoText) => TodoMiddleware.firebaseAdd(todoText),
    deleteTodo: (index) => TodoMiddleware.firebaseDelete(index),
    updateTodo: (text,index) => TodoMiddleware.firebaseUpdate(text,index),
  };
}

class App extends Component {
  constructor(){
    super();
    this.state = {
      states: {todoList:[],key:[]},
      field:""
    }
  }
  componentWillReceiveProps(nextProps){
    this.setState({states: nextProps.todoState})
  }
  componentWillMount(){
    this.props.addList()
  }
  submits(e){
    e.preventDefault()
    if( this.state.field.trim() !== "" ){
      this.props.addTodo(this.state.field);
      this.setState({field:""})
    }else{
      alert("Write Something");
      this.setState({field:""}) 
    }
  }
  render() {
    return (
      <div>
        <div className="App">
          <form onSubmit={this.submits.bind(this)}>
            <br/>
            <TextField
              hintText="Todo Description" floatingLabelText="Add Todo"
              onChange={(e)=>this.setState({field:e.target.value})}
              value={this.state.field}
            />
            <RaisedButton
              label="Add" primary={true} style={{margin:"12"}}
              onClick={this.submits.bind(this)}
            />
          </form>
        </div>
        <hr/>
        <div>
          <h3 style={{marginLeft:"12"}}>List</h3>
          <ol>
            {
              this.state.states.todoList.map((todo)=>{
                let id = this.state.states.todoList.indexOf(todo);
                return (
                  <List
                    key={id} todo={todo}
                    index={this.state.states.key[id]}
                    deleteTodo={(index)=>this.props.deleteTodo(index)}
                    updateTodo={(text,index)=>this.props.updateTodo(text,index)}
                  />
                )
              })
            }
          </ol>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);