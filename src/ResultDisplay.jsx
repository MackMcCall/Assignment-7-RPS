import { useEffect, useState } from "react";

export default function Results({ playerChoice, computerChoice }) {
    const [result, setResult] = useState("");

    useEffect(() => {
        if (playerChoice === null || computerChoice === null) return;

        if (playerChoice === computerChoice) {
            setResult("IT'S A TIE!");
        } else if (
            (playerChoice === 0 && computerChoice === 1) ||
            (playerChoice === 1 && computerChoice === 2) ||
            (playerChoice === 2 && computerChoice === 0)
        ) {
            setResult("COMPUTER WINS!");
        } else {
            setResult("YOU WIN!");
        }
    }, [computerChoice]);

    return <h3>{result}</h3>;
}
