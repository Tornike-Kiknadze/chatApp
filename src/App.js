import React, { Component } from "react";

import Wrapper from "./components/wrapper/wrapper";
import List from "./components/list/list";
import General from "./components/general/general";
import User from "./components/user/user";
import { createGlobalStyle } from "styled-components";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Wrapper>
        
          <GlobalStyle />
          <List />
          <General />
          <User />
        </Wrapper>
      </div>
    );
  }
}
const GlobalStyle = createGlobalStyle`
html {
  font-size: 90%;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

::-webkit-scrollbar-thumb {
  background-color: #7e8d85;
  outline: 1px solid #7e8d85;
  border-radius: 5px;
}
::-webkit-scrollbar {
  width: 0.3rem;
}
.App {
  text-align: center;
 
}

.App-logo {
  animation: App-logo-spin infinite 20s linear;
  height: 40vmin;
  pointer-events: none;
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmidn);
  color: white;
}

.App-link {
  color: #61dafb;
}

 
`;
export default App;
