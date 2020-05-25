import React, {Component} from 'react';
import './Counter.css';
import CounterButton from './CounterButton';


class Counter extends Component{
    constructor(){
        super();
        this.state={
            counter : 0,
        }
    }

    resetData = () => {
        this.setState(()=>{
            return { counter: 0}
        });
    }
    decrement= (by) =>{
        this.setState((prevStat)=>{
            return {counter : prevStat.counter - by}
        });
    }
        increment= (by) => { 
            //  console.log(`increment from parent ${by}`);
            // this.setState({
            //      counter: this.state.counter + by
            //  });
            // this.props.incrementMethod();

            this.setState((prevStat)=>{
                return { counter: prevStat.counter + by}
                }
            );
        } 
    
    render() {
        return (
          <div className="counter">
            <CounterButton by={1} incrementMethod={this.increment} decrementMethod={this.decrement} />
            {/* by={1}  */}
            <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement}/>
            <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement}/>
            <span className="count">{this.state.counter}</span>
            <div><button onClick={this.resetData} className="reset">Reset</button></div>
            
            </div>
        );
      }
}

export default Counter; 