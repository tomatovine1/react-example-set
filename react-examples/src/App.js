// App.js
import React, { Component } from 'react';
class Collatz extends Component { render() {
    const { number } = this.props;
        // WARNING: This code reruns with every rendering
        let x = number;
        let outputString = x.toString();
        while (typeof x == 'number' && x !== 1) {
            if ((x % 2) === 1) { x = 3*x + 1;
            } else {
                x = x/2;
                };
                outputString += ' ' + x; };
                return (
                    <div className="Collatz">
                        <h2>Collatz Sequence for {number}</h2>
                        <p>{ outputString }</p> 
                    </div>
                );
            }
        }

class App extends Component { 
    render() {
        const number = 17; const wikilink ='https://en.wikipedia.org/wiki/Collatz_conjecture';
        return (
            <div className="App">
                <h1>Collatz Conjecture</h1>
                    <p>The <a href={wikilink}>Collatz Conjecture</a>&nbsp;
                    states that for any positive integer, <i>x</i>,
                    repeatedly applying <i>3x + 1</i> if odd and 
                    <i> x/2</i> if even will eventually lead to 1.</p>
                <p>No one knows if this is true.</p>
                    
                <Collatz number={number} /> 
            </div>
        );
    }
}
export default App;
