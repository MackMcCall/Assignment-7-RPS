import { useEffect, useState } from "react";

export default function ComputerThrow({
    playerChoice,
    setComputerChoice,
    throwOptionImages,
}) {
    const QUESTION = "images/question-mark.PNG";

    const [img, setImg] = useState(QUESTION);

    useEffect(() => {
        if (playerChoice === null || playerChoice === undefined) return;

        let i = 0;

        const interval = setInterval(() => {
            i = (i + 1) % 3;
            setImg(throwOptionImages[i]);
        }, 500);

        const timeout = setTimeout(() => {
            clearInterval(interval);

            const final = Math.floor(Math.random() * 3);

            setComputerChoice(final);
            setImg(throwOptionImages[final]);
        }, 3000);

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, [playerChoice]);

    return <img src={img} alt="computer" />;
}
