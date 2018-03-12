import TodoListAction from "../actions/todoList";
import firebase from "firebase"

export default class TodoMiddleware {
    
    static firebaseRender() {
        return (dispatch) => {
            firebase.database().ref("List/").on('value', (use) => {
                use.val() !== null && use.val() !== undefined
                ?
                dispatch(TodoListAction.updateList(Object.values(use.val()),Object.keys(use.val())))
                :
                dispatch(TodoListAction.updateList([],[]))
            })
        }
    }

    static firebaseAdd(data) {
        firebase.database().ref("List/").push({ text: data })
    }  

    static firebaseDelete(index) {
        firebase.database().ref("List/"+index).remove()
    }  

    static firebaseUpdate(data,index) {
        firebase.database().ref("List/"+index).update({ text: data })
    }   

    static auth(email,password,name){
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then((user)=>{
        console.log('signed up')
        firebase.database().ref('List/').child(user.uid).set({Name:name})
        })
        .catch(
        (error) => alert(error) 
        );
    }

}