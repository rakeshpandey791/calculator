import React, {Component} from 'react';
import logo from './logo.svg';
import './App.scss';

class App extends Component {
  state = {
    calculatorKeys : [],
    result: '',
    operators: []
  }

  constructor(){
    super();
  }

  componentDidMount(){
    const calculatorKeys = [
      {label: 'AC', action: 'AC', gridClass:'ac'}, {label: '+/-', action: 'AC', gridClass:'ac'},
       {label: '%', action: '%', gridClass:'ac'}, {label: '/', action: '/', gridClass:'action'},
        {label: '7', action: '7', gridClass:'number'}, {label: '8', action: '8', gridClass:'number'}, 
      {label: '9', action: '9', gridClass:'number'}, {label: 'X', action: '*', gridClass:'action'},
       {label: '4', action: '4', gridClass:'number'}, {label: '5', action: '5', gridClass:'number'},
        {label: '6', action: '6', gridClass:'number'}, {label: '-', action: '-', gridClass:'action'},
      {label: '1', action: '1', gridClass:'number'}, {label: '2', action: '2', gridClass:'number'},
       {label: '3', action: '3', gridClass:'number'}, {label: '+', action: '+', gridClass:'action'},
        {label: '0', action: '0', gridClass:'number-0'}, {label: '.', action: '.', gridClass:'number'},
      {label: '=', action: '=', gridClass:'action'}
    ];
    this.setState({calculatorKeys: calculatorKeys});
  }

  handleCaculatorKey = (event) => {
    const clickedCmd = event.target.dataset.cmd;
    let key = this.state.result;
    switch(clickedCmd) {
      case '0': 
          key += clickedCmd;
          this.setState({result: key});
        return;
      case '1': 
        key += clickedCmd;
        this.setState({result: key});
        return;
      case '2': 
      key += clickedCmd;
        this.setState({result: key});
        return;
      case '3': 
      key += clickedCmd;
        this.setState({result: key});
        return;
      case '4': 
        key += clickedCmd;
        this.setState({result: key});
        return;
      case '5': 
        key += clickedCmd;
        this.setState({result: key});
        return;
      case '6': 
        key += clickedCmd;
        this.setState({result: key});
        return;
      case '7': 
        key += clickedCmd;
        this.setState({result: key});
        return;
      case '8': 
        key += clickedCmd;
        this.setState({result: key});
        return;
      case '9': 
        key += clickedCmd;
        this.setState({result: key});
        return;
      case 'AC': 
        this.setState({result: '', operators: []});
        return;
      case '+':
        this.handleOperators(clickedCmd);         
        return;
      case '-': 
        this.handleOperators(clickedCmd); 
        return;
      case '*': 
        this.handleOperators(clickedCmd); 
        return;
      case '/': 
        this.handleOperators(clickedCmd); 
        return;
      case '=': 
        let newResult = 0;
        if(this.state.operators.length > 0) {
          newResult = this.processOperator(this.state.operators[1], parseInt(this.state.operators[0]), parseInt(this.state.result));
        } else {
          newResult = this.state.result
        }
        this.setState({result: newResult, operators: [newResult, this.state.operators[1]]}); 
        return;
      case '%': 
        if(this.state.result) {
          const mode = this.processOperator('%', parseInt(this.state.result), 100);
          this.setState({result: mode, operators: []}); 
        }
        return;
        
    }
  }

  handleOperators = (clickedCmd) => {
    const operators = this.state.operators;
    if(operators.length < 1){
      operators.push(this.state.result);
      operators.push(clickedCmd);
      this.setState({result: '', operators: operators});
    } else {
      const newResult = this.processOperator(operators[1], parseInt(operators[0]), parseInt(this.state.result));
      this.setState({result: ''});
      operators[0] = newResult;
      operators[1] = clickedCmd;
      this.setState({operators: operators});
    }
  }

  processOperator(operator, val1, val2) {
    switch(operator) {
      case '+':
        return val1 + val2;
      case '-':
        return val1 - val2;
      case '*':
        return val1 * val2;
      case '/':
        return val1 / val2;
      case '%':
        return val1 / val2;
    }
  }

  render(){
    return (
      <div className="calculator-container" onClick={this.handleCaculatorKey}>
      <div className="result">{this.state.result}</div>
        {
          this.state.calculatorKeys.map((key)=> (
            <div className={key.gridClass} 
            data-cmd={key.action} key={key.label}>{key.label}</div>
          ))
        }
      </div>
    );
  }
}

export default App;
