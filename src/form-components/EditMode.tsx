import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [username, setUserName] = useState<string>("Your Name");
    const [isStudent, setStudent] = useState<boolean>(true);
    const [isEdit, setEdit] = useState<boolean>(false);
  
    function updateMode(event: React.ChangeEvent<HTMLInputElement>) {
        setEdit(event.target.checked);
    }
    function updateStatus(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.checked);
    }
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setUserName(event.target.value);
    }

    function checkBox(): JSX.Element {
        return (
            <div>
                <Form.Check
                    type="checkbox"
                    id="is-student-check"
                    label="Student?"
                    checked={isStudent}
                    onChange={updateStatus}
                    disabled={!isEdit}
                />
                <Form.Group controlId="get student username">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control
                        type="textbox"
                        value={username}
                        onChange={updateName}
                        disabled={!isEdit}
                    />
                </Form.Group>
            </div>
        );
    }
    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Switch
                type="switch"
                id="is-edit-check"
                label="Edit Mode?"
                checked={isEdit}
                onChange={updateMode}
            />
            {isEdit === true ? checkBox() : <span> Not in edit mode</span>}
            {username} is {isStudent ? "a student" : "not a student"}
        </div>
    );
}
