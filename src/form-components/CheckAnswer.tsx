import React, { useState } from "react";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [userAnswer, setUserAnswer] = useState("");
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserAnswer(event.target.value); //updates the user input
    };
    //need to compare user unswer with expected answer
    const CheckAnswer = () => {
        if (
            userAnswer.trim().toLowerCase() ===
            expectedAnswer.trim().toLowerCase()
        ) {
            return "✔️";
        } else {
            return "❌";
        }
    };
    return (
        <div>
            <h3>Check Answer</h3>
            <input
                type="text"
                value={userAnswer}
                onChange={handleInputChange}
            />
            <div>{CheckAnswer()}</div> {/*display result of answer*/}
        </div>
    );
}
