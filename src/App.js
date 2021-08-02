import React from "react";
import UserCreate from "./components/userCreate";
import Languagecontext from "./contexts/languagecontext";
import colorcontext from "./contexts/colorcontext";

class App extends React.Component {
  state = { language: 'english' }

  onLanguageChange = language => {
    this.setState({ language })
  }
  render() {
    return (
      <div className="ui container">
        <div>
          Select a language:
          <i className="flag us" onClick={() => this.onLanguageChange('english')} />
          <i className="flag nl" onClick={() => this.onLanguageChange('dutch')} />
        </div>
        <colorcontext.Provider value='red'>
          <Languagecontext.Provider value={this.state.language}>
            <UserCreate />
          </Languagecontext.Provider>
        </colorcontext.Provider>
      </div>
    );
  }
}

export default App;
