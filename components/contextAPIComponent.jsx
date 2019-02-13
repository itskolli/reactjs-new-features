import React, {Component} from "react";
import ThemeContext from "../context/ThemeContext.jsx"
import ButtonComponent from "./Button.jsx";

class ContextComponent extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        <h3>Context API</h3>
        <ThemeContext.Consumer>
          {(value) => ( <h3>Using <i>Context Consumer</i> for accessing context <i>{value}</i></h3> ) }
        </ThemeContext.Consumer>
        <ButtonComponent/>
      </div>
    )
  }
}

export default ContextComponent;
