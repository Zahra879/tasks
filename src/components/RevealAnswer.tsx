import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [value, setValue] = useState<boolean>(false);
    function visible(): void {
        setValue(!value);
    }
    return (
        <div>
            <Button onClick={visible}>Reveal Answer</Button>
            {value && <div>42</div>}
        </div>
    );
}
