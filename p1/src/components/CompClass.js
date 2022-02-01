import React from 'react';
import '../App.css';
import BtnClass from './BtnClass';
import BtnFunc from './BtnFunc';


class CompClass extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      color1: "orange",
      color2: "blue"
    }
    this.changeBg = this.changeBg.bind(this);
  }

  changeBg(name) {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    this.setState({[name]: `#${randomColor}`});
    console.log(this.state);
  }

  render() {
    var changeBg = this.changeBg;
    return (
      <>
      <BtnClass 
        name="color1"
        color={this.state.color1} // only 1 source of truth
        onClick={changeBg.bind(this)}
        style={{width: 50, height: 50}}/>

      <BtnFunc 
        name="color2"
        color={this.state.color2} 
        onClick={changeBg.bind(this)}
        style={{width: 50, height: 50}}/>
        </>
    );
  }
}

export default CompClass;
