import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS = [
    "white",
    "black",
    "red",
    "yellow",
    "green",
    "blue",
    "purple",
    "cyan"
];
const DEFAULT_COLOR_INDEX = COLORS[0];

export function ChangeColor(): JSX.Element {
    const [choosenColor, setColor] = useState("black");

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }
    return (
        <div>
            <h3>Change Color</h3>
            <Form.Check
                inline
                type="radio"
                name="COLORS"
                onChange={updateColor}
                id="true-colors"
                label="RED"
                value="red"
                checked={choosenColor === "red"}
            />
            <Form.Check
                inline
                type="radio"
                name="COLORS"
                onChange={updateColor}
                id="true-colors"
                label="WHITE"
                value="white"
                checked={choosenColor === "white"}
            />
            <Form.Check
                inline
                type="radio"
                name="COLORS"
                onChange={updateColor}
                id="true-colors"
                label="BLACK"
                value="black"
                checked={choosenColor === "black"}
            />
            <Form.Check
                inline
                type="radio"
                name="COLORS"
                onChange={updateColor}
                id="true-colors"
                label="YELLOW"
                value="yellow"
                checked={choosenColor === "yellow"}
            />
            <Form.Check
                inline
                type="radio"
                name="COLORS"
                onChange={updateColor}
                id="true-colors"
                label="GREEN"
                value="green"
                checked={choosenColor === "green"}
            />
            <Form.Check
                inline
                type="radio"
                name="COLORS"
                onChange={updateColor}
                id="true-colors"
                label="BLUE"
                value="blue"
                checked={choosenColor === "blue"}
            />
            <Form.Check
                inline
                type="radio"
                name="COLORS"
                onChange={updateColor}
                id="true-colors"
                label="PURPLE"
                value="purple"
                checked={choosenColor === "purple"}
            />
            <Form.Check
                inline
                type="radio"
                name="COLORS"
                onChange={updateColor}
                id="true-colors"
                label="CYAN"
                value="cyan"
                checked={choosenColor === "cyan"}
            />
            <div>
                <span
                    style={{ background: choosenColor }}
                    data-testid="colored-box"
                >
                    {" "}
                    backgroundColor = {choosenColor}
                </span>
            </div>
        </div>
    );
}
