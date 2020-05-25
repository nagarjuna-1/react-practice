import React, {Component} from 'react';

class ListTodosComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            todos : [{id: 1, description: 'Learn React', done:false, targetDate: new Date()},
                    {id: 2, description: 'Learn Something', done:true, targetDate: new Date()},
                    {id: 3, description: 'Do Something', done:false, targetDate: new Date()},
                    {id: 4, description: 'Get Something', done:true, targetDate: new Date()}]
        }
    }
    render(){
        return (
            <>
                <h1>List Todos</h1>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <td>Id</td>
                                <td>Description</td>
                                <td>Is Completed</td>
                                <td>Target Date</td>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {
                            this.state.todos.map(todo => 
                            <tr key={todo.id}>
                                <td>{todo.id}</td>
                                <td>{todo.description}</td>
                                <td>{todo.done.toString()}</td>
                                <td>{todo.targetDate.toString()}</td>
                            </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </>
        );
    }
}

export default ListTodosComponent