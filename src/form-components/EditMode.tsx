import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [username, setUserName] = useState<string>("Your Name");
    const [isStudent, setStudent] = useState<boolean>(true);
    const [isEdit, setEdit] = useState<boolean>(false);

    function textBox(): JSX.Element {
        function updateName(event: React.ChangeEvent<HTMLInputElement>) {
            setUserName(event.target.value);
        }
        return (
            <div>
                <Form.Group controlId="get student username">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control
                        type="textbox"
                        value={username}
                        onChange={updateName}
                        disabled={!edit}
                    />
                </Form.Group>
            </div>
        );
    }
}
function checkBox(): JSX.Element {
    const [isStudent, setStudent] = useState(false);

    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.checked);
    }
    return (
        <div>
            <Form.Check
                type="checkbox"
                id="is-student-check"
                label="Student?"
                checked={isStudent}
                onChange={updateStudent}
                disabled={!edit}
            />
            <div>
                Your Name {isStudent ? "is a student" : "is not a student"}.
            </div>
        </div>
    );
}

function edit(): JSX.Element {
    const [isEdit, setEdit] = useState(false);
    function updateEdit(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.checked);

        return (
            <div>
                <Form.Switch
                    type="switch"
                    id="is-happy-check"
                    label="Happy?"
                    checked={isEdit}
                    onChange={updateEdit}
                />
                {EditMode === true ? (
                    checkBox()
                ) : (
                    <span> Not in edit mode</span>
                )}
                ;
            </div>
        );
    }
    return (
        <div>
            <h3>Edit Mode</h3>
        </div>
    );
}
