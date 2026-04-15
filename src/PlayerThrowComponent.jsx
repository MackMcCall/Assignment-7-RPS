import { useState } from "react";

export default function PlayerThrow({ setPlayerChoice }) {
    const [selected, setSelected] = useState(null);

    function handleClick(index) {
        setPlayerChoice(index);
        setSelected(index);
    }

    return (
        <div>
            <img
                src="images/rock.PNG"
                alt="rock"
                onClick={() => handleClick(0)}
                style={{
                    cursor: "pointer",
                    border:
                        selected === 0 ? "3px solid blue" : "1px solid #ddd",
                    margin: "10px",
                }}
            />

            <img
                src="images/paper.PNG"
                alt="paper"
                onClick={() => handleClick(1)}
                style={{
                    cursor: "pointer",
                    border:
                        selected === 1 ? "3px solid blue" : "1px solid #ddd",
                    margin: "10px",
                }}
            />

            <img
                src="images/scissors.PNG"
                alt="scissors"
                onClick={() => handleClick(2)}
                style={{
                    cursor: "pointer",
                    border:
                        selected === 2 ? "3px solid blue" : "1px solid #ddd",
                    margin: "10px",
                }}
            />
        </div>
    );
}
