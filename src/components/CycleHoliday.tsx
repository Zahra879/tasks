import React, { useState } from "react";
import { Button } from "react-bootstrap";

/*type Holiday = "christmas🎄";
("holloween🎃");
("spring break🦋");
("summer🍀");
("winter break⛄");*/
export function CycleHoliday(): JSX.Element {
    const [holiday, setholiday] = useState<string>("🎄");
    function AlphabetOrder(): void {
        if (holiday === "🎄") {
            setholiday("🎃");
        } else if (holiday === "🎃") {
            setholiday("🦋");
        } else if (holiday === "🦋") {
            setholiday("🍀");
        } else if (holiday === "🍀") {
            setholiday("⛄");
        } else if (holiday === "⛄") {
            setholiday("🎄");
        }
    }
    function inorder(): void {
        if (holiday === "🎄") {
            setholiday("🦋");
        } else if (holiday === "🦋") {
            setholiday("🍀");
        } else if (holiday === "🍀") {
            setholiday("🎃");
        } else if (holiday === "🎃") {
            setholiday("⛄");
        } else if (holiday === "⛄") {
            setholiday("🎄");
        }
    }
    return (
        <div>
            <div>
                <Button onClick={AlphabetOrder}>Alphabet</Button>
            </div>
            <div>
                <Button onClick={inorder}>Year</Button>
            </div>
        </div>
    );
}
