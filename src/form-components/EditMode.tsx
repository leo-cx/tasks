import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [isEditMode, changeIsEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, changeIsStudent] = useState<boolean>(true);

    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        changeIsEditMode(event.target.checked);
    }
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    function updateStudentStatus(event: React.ChangeEvent<HTMLInputElement>) {
        changeIsStudent(event.target.checked);
    }
    return (
        <div>
            <h3>Edit Mode</h3>
            {isEditMode ? (
                <>
                    <Form.Group controlId="formEditMode">
                        <Form.Label>Name</Form.Label>
                        <Form.Control value={name} onChange={updateName} />
                        <Form.Check
                            type="checkbox"
                            id="isStudent"
                            label="StudentMayhaps?"
                            checked={isStudent}
                            onChange={updateStudentStatus}
                        />
                    </Form.Group>
                </>
            ) : (
                <>
                    {name} is {isStudent ? "" : "not"} a student
                </>
            )}
            <Form.Check
                type="switch"
                id="isEdit"
                label="Edit"
                checked={isEditMode}
                onChange={updateEditMode}
            ></Form.Check>
        </div>
    );
}
