import { useState } from "react";
import "./App.css";
import PlayerThrow from "./PlayerThrowComponent";
import ComputerThrow from "./ComputerThrow";
import ResultsDisplay from "./ResultDisplay";

const throwOptionImages = [
    "images/rock.PNG",
    "images/paper.PNG",
    "images/scissors.PNG",
];

function App() {
    const [playerChoice, setPlayerChoice] = useState(null);
    const [computerChoice, setComputerChoice] = useState(null);

    return (
        <div>
            <PlayerThrow
                computerChoice={null}
                setPlayerChoice={setPlayerChoice}
            />

            <ComputerThrow
                playerChoice={playerChoice}
                computerChoice={computerChoice}
                setComputerChoice={setComputerChoice}
                throwOptionImages={throwOptionImages}
            />

            <ResultsDisplay
                playerChoice={playerChoice}
                computerChoice={computerChoice}
            />
        </div>
    );
}

export default App;
