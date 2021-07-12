import React from "react";
import "./App.css";
import star from "./star.png";

class StarWindow extends React.Component<any, any> {
    render() {
        return (
            <div>
                {[...Array(this.props.numStars)].map(() => (
                        <img alt="star" src={star} />
                ))}
            </div>
        );
    }
}

class NumberWindow extends React.Component<any, any> {
    render() {
        return (
            <div>
                <ul>
                    <Number value={1} />
                    <Number value={2} />
                    <Number value={3} />
                    <Number value={4} />
                    <Number value={5} />
                    <Number value={6} />
                    <Number value={7} />
                    <Number value={8} />
                    <Number value={9} />
                </ul>
            </div>
        );
    }
}

class Number extends React.Component<any, any> {
    render() {
        return (
            <li>{this.props.value}</li>
        )
    }
}

function App(props: any) {
    const numStars = Math.floor(Math.random() * 9) + 1;

    return (
        <div className="App">
            <h1>Pick 1 or more numbers that add up to the number of stars</h1>
            <div className="Windows">
                <StarWindow numStars={numStars} />
                <NumberWindow />
            </div>
        </div>
    );
}

export default App;
