import React from 'react';
import Languagecontext from '../contexts/languagecontext';
import colorcontext from '../contexts/colorcontext';
class Button extends React.Component {
    renderSubmit(language) {
        return language === 'english' ? 'Submit' : 'Voorleggen';
    }

    render() {
        return (
            <div>
                <colorcontext.Consumer>{
                    (color) =>
                        <button className={`ui button ${color}`}>
                            <Languagecontext.Consumer>
                                {({ language }) => this.renderSubmit(language)}
                            </Languagecontext.Consumer>
                        </button>
                }
                </colorcontext.Consumer>
            </div>
        )
    }
}

export default Button