import React from 'react';
import './App.css';

class StarWindow extends React.Component<any, any> {
    render() {
        return (
            <div>
                Stars
            </div>
        );
    }
}

class NumberWindow extends React.Component<any, any> {
    render() {
        return (
            <div>
                Numbers
            </div>
        );
    }
}

function App(props: any) {
    return (
        <div className="App">
            <h1>Pick 1 or more numbers that add up to the number of stars</h1>
            <div className="Windows">
                <div className="StarWindow"></div>
                <div className="NumberWindow"></div>
            </div>
        </div>
    );
}

export default App;
