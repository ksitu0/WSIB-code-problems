import React from 'react';
import '../App.css';

class BtnClass extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    var handleClick = this.props.onClick;
    return (
      <button 
        onClick={()=>handleClick(this.props.name)}
        // color to override default style
        style={{...this.props.style, 
                backgroundColor: this.props.color}}/>
    );
  }
}

export default BtnClass;
