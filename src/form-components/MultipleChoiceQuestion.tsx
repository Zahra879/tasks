import React, { useState } from "react";
import { Form } from "react-bootstrap";
//import { CheckAnswer } from "./CheckAnswer";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [userChoise, setUserChoise] = useState(options[0]);

    function updateAnswer(event: React.ChangeEvent<HTMLSelectElement>) {
        setUserChoise(event.target.value);
    }
    return (
        <>
            <h3>Multiple Choice Question</h3>
            <div>
                <Form.Group controlId="Multiple Choice Question">
                    <Form.Label>Choose from the following answers</Form.Label>
                    <Form.Select value={userChoise} onChange={updateAnswer}>
                        {options.map((option: string) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
                {/*The answer is {CheckAnswer}.*/}
            </div>
            {userChoise === expectedAnswer ? <span>✔️</span> : <span>❌</span>}
        </>
    );
}
