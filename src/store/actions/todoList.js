export default class TodoListAction {

    static UPDATE = "UPDATE";

    static updateList(lists,key){
        return { 
            type: TodoListAction.UPDATE,
            payload:{
                
                todoList: lists,
                key: key
            },
        }
    }
    
}