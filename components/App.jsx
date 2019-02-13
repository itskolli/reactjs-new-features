import React, {Component} from "react";
import ThemeContext from "../context/ThemeContext.jsx"
import UseStateComponent from "./useState.jsx";
import StringComponent from "./String.jsx";
import ContextComponent from "./contextAPIComponent.jsx";


class App extends Component {
  constructor(props){
    super(props);
    this.onThemeChange = this.onThemeChange.bind(this);
    this.state = {
      theme: "dark"
    }
  }
  onThemeChange(e){
    this.setState({theme: e.target.value});
  };

  render() {
    return (
      <ThemeContext.Provider value={this.state.theme}>
        <label> Theme:
          <select onChange={(e)=>this.onThemeChange(e)}>
            <option value="dark">Dark</option>
            <option value="light">Light</option>
          </select>
        </label>
        <hr/>
        <div><StringComponent/></div>
        <hr/>
        <UseStateComponent/>
        <hr/>
        <ContextComponent/>
      </ThemeContext.Provider>
    )
  }
}

export default App;

