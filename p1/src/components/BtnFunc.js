import React from 'react';
import '../App.css';

function BtnFunc(props) {
    return (
      <button 
        onClick={()=>props.onClick(props.name)}
        // color to override default style
        style={{...props.style, 
                backgroundColor: props.color}}/>
    );
}

export default BtnFunc;
