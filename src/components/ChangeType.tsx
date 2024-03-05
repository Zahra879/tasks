import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

//type QuestionType = "multipe_choice_question" | "short_anwer_question";
export function ChangeType(): JSX.Element {
    const [Questiontype, setQuestionType] = useState<QuestionType>(
        "short_answer_question"
    );
    function CT(): void {
        setQuestionType(
            Questiontype === "multiple_choice_question"
                ? "short_answer_question"
                : "multiple_choice_question"
        );
    }
    return (
        <div>
            <Button onClick={CT}>Change Type</Button>
            <div>
                {Questiontype === "multiple_choice_question" ? (
                    <span>Multiple Choice </span>
                ) : (
                    <span>Short Answer</span>
                )}
            </div>
        </div>
    );
}
