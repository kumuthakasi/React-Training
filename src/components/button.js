import React from 'react';
import Languagecontext from '../contexts/languagecontext';
import colorcontext from '../contexts/colorcontext';
class Button extends React.Component {
    renderSubmit(value) {
        return value === 'english' ? 'Submit' : 'Voorleggen';
    }

    render() {
        return (
            <div>
                <colorcontext.Consumer>{
                    (color) =>
                        <button className={`ui button ${color}`}>
                            <Languagecontext.Consumer>
                                {value => this.renderSubmit(value)}
                            </Languagecontext.Consumer>
                        </button>
                }
                </colorcontext.Consumer>
            </div>
        )
    }
}

export default Button