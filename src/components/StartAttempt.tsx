import { isDisabled } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import { Button } from "react-bootstrap";

//type Attemp = "Start" | "Stop" | "Mulligan";
export function StartAttempt(): JSX.Element {
    const [num_Attempt, setNumAttepmt] = useState<number>(4);
    const [in_progress, setProgress] = useState<boolean>(false);
    /*
    function changeAtt(): void {
        setProgress(
            in_progress === true ?
            isDisabled = Start Quiz && mulligan: Stop Quiz;
        )
    }*/
    function startQuiz(): void {
        setProgress(true);
        setNumAttepmt(num_Attempt - 1);
    }
    function stopQuiz(): void {
        setProgress(false);
    }
    function mulligan(): void {
        setNumAttepmt(num_Attempt + 1);
    }
    return (
        <div>
            <span>Number of Attempts: {num_Attempt}</span>
            <div>
                <Button
                    onClick={startQuiz}
                    disabled={in_progress || num_Attempt === 0}
                >
                    Start Quiz
                </Button>
            </div>
            <div>
                <Button onClick={stopQuiz} disabled={!in_progress}>
                    Stop Quiz
                </Button>
            </div>
            <div>
                <Button onClick={mulligan} disabled={in_progress}>
                    Mulligan
                </Button>
            </div>
        </div>
    );
}
