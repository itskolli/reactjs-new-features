import React, {Component} from "react";
import ThemeContext from "../context/ThemeContext.jsx"

class ButtonComponent extends Component{
  static contextType = ThemeContext;
  constructor(props){
    super(props);
  }

  render(){
    return(
      <>
        <h3>Using <i>contextType</i> for injecting context into component</h3>
       <button type="button">{this.context}</button>
      </>
    )
  }
}

export default ButtonComponent;
