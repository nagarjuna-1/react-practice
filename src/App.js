import React, { Component } from 'react';
import './App.css';
import FirstComponent from './components/learning-examples/FirstComponent';
import SecondComponent from './components/learning-examples/SecondComponent';
import ThirdComponent from './components/learning-examples/ThirdComponent';
import Counter from './components/counter/Counter';
import TodoApp from './components/todo/TodoApp';
import './bootstrap.css';
//React is required if we are using jsx
// babel enables us to write latest js and internally it converts to browser specific version/react
// we cannot return multiple jsx component (must be enclosed wd tag/empty tag)
// if parenthesis is removed, jsx component shd be return from same component
// for default export {} is not required, for others its mandatory


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <CounterButton by={1}/> */}
        {/* by={1}  */}
        {/* <CounterButton by={5} />
        <CounterButton by={10} /> */}
        {/* <Counter/> */}
        <TodoApp/>
        </div>
    );
  }
}


class LearningComponents extends Component{
  render(){
    return <div className="LearningComponents">
    My Hello World
    <FirstComponent/>
    <SecondComponent/>
    <ThirdComponent/>
  </div>
  }
}

//For custom components starting letter should be capital letter
export default App;