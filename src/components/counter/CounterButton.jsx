import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Counter.css';


class CounterButton extends Component{
    //Define initial state in constructor
    //state =? counter 0
    constructor(){
        super(); // before this, super shd be called
        // this.state={
        //     counter : 0,
        //     secondCounter : 100
        // }
    
        // this.increment = this.increment.bind(this);
        // no need to do binding with arrow functions
    }
        render() {
        // const style = {fontSize : "50px", padding : "15px 30px"};
           return(<div className="counter">
            <button onClick={this.increment}>+{this.props.by}</button>
            <button onClick={this.decrement}>-{this.props.by}</button> 
        {/* <span className="count" > {this.state.counter}</span>  */}
        {/* style={style} */}
        {/* <span className="count"> {this.state.secondCounter}</span>  */}
    
        </div>);
       }

       decrement=() => {
        //    this.setState((preStat) => {
        //        return {counter : preStat.counter - this.props.by}
        //    });
               this.props.decrementMethod(this.props.by);
        }
    
        increment= () => { //pdate statec-- counter++
        // this.setState({
        //     counter: this.state.counter + this.props.by,
        //     secondCounter: this.state.secondCounter +1
        // });
        // this.setState((preStat) => {
        //          return { counter : preStat.counter + this.props.by }
        //     });
        this.props.incrementMethod(this.props.by);
        }
}
    
    
    CounterButton.defaultProps ={
        by : 1 
    }
     
    CounterButton.propTypes ={
        by : PropTypes.number
    }


    export default CounterButton;