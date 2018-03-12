import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export default class List extends Component {
  constructor(){
    super();
    this.state = {
      Update: false,
      field: "",
    }
  }
  componentDidMount(){
    this.setState({field: this.props.todo.text})
  }
  submits(e){
    e.preventDefault()
    if (this.state.field.trim() !== "") {
      this.props.updateTodo(this.state.field,this.props.index);
      this.setState({Update:false});
    }else{ 
      alert("Write Something")
      this.setState({field: this.props.todo.text}) 
    }
  }
  render() {
    return (
      <li id="li" style=
        {{
          margin:"0px 25px 20px 25px",
          height: "auto",
          width: "-webkit-fill-available",
          float: "left",
          paddingRight: "10%"
        }}
      >
        <div id="liDiv" style=
          {{
            padding: "0px 20px",
            height: "auto",
            backgroundColor: "lightgray",
            borderRadius: "28px 28px 28px 28px",
            textAlign: "left",
            width: "-webkit-fill-available",
            float: "left",
            margin: "0px 0px 10px 30px",
            fontSize: "smaller",
            boxShadow: "10px 10px rgba(0, 0, 0, 0.35)",
            wordBreak: "break-all",
          }}
        >{
          this.state.Update
          ?
            <div style={{textAlign:"center"}}>
              <form onSubmit={this.submits.bind(this)}>
                <br/>
                <TextField
                  hintText="Todo Description" floatingLabelText="Add Todo"
                  onChange={(e)=>this.setState({field:e.target.value})}
                  value={this.state.field}
                />
                <RaisedButton
                  label="Save" primary={true} style={{margin:"12px"}}
                  onClick={this.submits.bind(this)}
                />
                <RaisedButton 
                  label="Cancel" primary={true} style={{margin:"12px"}}
                  onClick={()=>this.setState({Update:false,field:this.props.todo.text})}
                />
              </form>
            </div>
          :
            <div>
              <h3>
                {this.props.todo.text}
              </h3>
              <RaisedButton 
                label="Update" primary={true} style={{margin:"10px",float:"right"}} 
                onClick={()=>this.setState({Update:true})}
              />
              <RaisedButton 
                label="Delete" primary={true} style={{margin:"10px",float:"right"}} 
                onClick={()=>this.props.deleteTodo(this.props.index)}
              />
            </div>
          }
        </div>
      </li>      
    );
  }
}