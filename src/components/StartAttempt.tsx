import { isDisabled } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Attemp = "Start" | "Stop" | "Mulligan";
export function StartAttempt(): JSX.Element {
    const [num_Attempt, setNumAttepmt] = useState<number>(4);
    const [in_progress, setProgress] = useState<boolean>(false);

    function changeAtt(): void {
        setProgress(
            in_progress === true ?
            isDisabled = Start Quiz && mulligan: Stop Quiz;
        )
    }
    return (
        <><div>
            <div>
                <Button onClick={() => setNumAttepmt(num_Attempt - 1)} num_Attempt /> === 0 ? disabled = {in_progress}
            >
                Start Quiz
            </Button>
            to {num_Attempt}.
        </div><div>
                <Button
                    onClick={() => setProgress(false)}
                    disabled={in_progress}
                >
                    Stop Quiz
                </Button>
            </div><div>
                <Button onClick={() => setNumAttepmt(num_Attempt + 1)}>
                    Mulligan
                </Button>
                to {num_Attempt}.
            </div><div>
                {in_progress === true ?
                    <span>disabled = Start Quiz && disabled = Mulligan</span> :
                    <span>disabled = Stop Quize</span>}
            </div></>
        </div;
);
    
}
