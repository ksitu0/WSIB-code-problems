import React from 'react';
import '../App.css';

class BtnClass extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    let handleClick = this.props.onClick;
    return (
      <button 
        onClick={()=>handleClick(this.props.name)} // passing name from props
        // color to override default style
        style={{...this.props.style, 
                backgroundColor: this.props.color}}/>
    );
  }
}

export default BtnClass;
