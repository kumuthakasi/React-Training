import React from "react";
import UserCreate from "./components/userCreate";
import colorcontext from "./contexts/colorcontext";
import LanguageSelector from "./components/languageSelector";
import { LanguageStore } from "./contexts/languagecontext";

class App extends React.Component {

  render() {
    return (
      <div className="ui container">
        <LanguageStore>
          <LanguageSelector />
          <colorcontext.Provider value='red'>

            <UserCreate />
          </colorcontext.Provider>
        </LanguageStore>
      </div>
    );
  }
}

export default App;
