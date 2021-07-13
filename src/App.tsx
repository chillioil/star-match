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

// class NumberWindow extends React.Component<any, any> {
//     render() {
//         return (
//             <div>
//                 <ul>
//                     {_.range(1, 10).map((num) => {
//                         return <Number value={num} onClick={this.props.onClick} />;
//                     })}
//                 </ul>
//             </div>
//         );
//     }
// }

class Number extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.setState({
            selected: false
        });
    }

    render() {
        return (
            <button
                onClick={this.props.onClick}
                style={{background: this.props.isWrongNumber ? "red" : this.props.isSelected ? "lightblue" : "lightgrey"}}
            >
                {this.props.value}
            </button>
        )
    }
}

function App(props: any) {
    const [numStars, setNumStars] = useState(_.range(1, 10));
    const [selectedNumbers, setSelectedNumbers] = useState(new Array<number>());
    const [wrongNumbers, setWrongNumbers] = useState(new Array<number>());
    const starsCount = numStars[Math.floor(Math.random() * numStars.length)];

    const handleOnClick = (event: any) => {
        const candidate = parseInt(event.target.innerHTML);
        if (selectedNumbers.includes(candidate)) {
            _.without(selectedNumbers, candidate);
            setSelectedNumbers(prevState => [...selectedNumbers]);
            return;
        }
        selectedNumbers.push(candidate);
        setSelectedNumbers(prevState => [...selectedNumbers]);
        console.log(selectedNumbers)
        let sum = _.sum(selectedNumbers);
        if (sum > starsCount) {
            selectedNumbers.forEach((number: number) => {
                wrongNumbers.push(number);
                setWrongNumbers(prevState => wrongNumbers);
            });
        }
    };

    return (
        <div className="App">
            <h1>Pick 1 or more numbers that add up to the number of stars</h1>
            <div className="Windows">
                <StarWindow numStars={starsCount} />
                <div>
                    {
                        _.range(1, 10).map((value) => {
                            return <Number
                                numStars={starsCount}
                                onClick={handleOnClick}
                                value={value}
                                isWrongNumber={wrongNumbers.includes(value)}
                                isSelected={selectedNumbers.includes(value)}
                            />
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default App;
