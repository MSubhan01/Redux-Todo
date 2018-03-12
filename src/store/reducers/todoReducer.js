import TodoListAction from '../actions/todoList'

const INITIAL_STATE = {
  List : {},
}
function TodoListReducer(state = INITIAL_STATE, action) {
  switch (action.type) {

    case TodoListAction.UPDATE:
    return Object.assign({}, state, {List: action.payload})
    
    default:
    return state;
  }

}

export default TodoListReducer;