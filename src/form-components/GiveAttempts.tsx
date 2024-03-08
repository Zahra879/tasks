import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [AttemptLeft, setAttemptLeft] = useState(3);
    const [requestedAtt, setRequestedAtt] = useState(0);
    /*const userInput = (event: React.ChangeEvent<HTMLInputElement>){
        setRequestedAtt(event.target.value);
    };*/

    const useAttempt = () => {
        if (AttemptLeft > 0) {
            setAttemptLeft(AttemptLeft - 1);
        }
    };

    const gainAttempt = () => {
        //const numAttempt = parseInt(requestedAtt);
        //if (!isNaN(numAttempt)) {
        setAttemptLeft(AttemptLeft + requestedAtt);
        //}
    };
    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Attepts left: {AttemptLeft}</p>
            <Form.Group controlId="giveAttempts">
                <Form.Label>Add attempts</Form.Label>
                <Form.Control
                    type="number"
                    value={requestedAtt}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setRequestedAtt(parseInt(event.target.value) || 0)
                    }
                />
            </Form.Group>
            <button onClick={useAttempt} disabled={AttemptLeft <= 0}>
                Use
            </button>
            <button onClick={gainAttempt}>Gain</button>
        </div>
    );
}
