import React, {useState} from "react";
import "./App.css";
import star from "./star.png";
import * as _ from "lodash";

class StarWindow extends React.Component<any, any> {
    render() {
        return (
            <div>
                {_.range(this.props.numStars).map(() => (
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
                    {_.range(1, 10).map((num) => <Number value={num}/>)}
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
    const [numStars, updateNumStars] = useState(_.range(1, 10));
    const rand = Math.floor(Math.random() * numStars.length);
    return (
        <div className="App">
            <h1>Pick 1 or more numbers that add up to the number of stars</h1>
            <div className="Windows">
                <StarWindow numStars={numStars[rand]} />
                <NumberWindow />
            </div>
        </div>
    );
}

export default App;
