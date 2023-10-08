import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [currentSelection, setCurrentSelection] = useState<string>(
        options[0]
    );
    function changeCurrentSelection(
        event: React.ChangeEvent<HTMLSelectElement>
    ): void {
        setCurrentSelection(event.target.value);
    }

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="formMultiChoice">
                <Form.Label>You answered: </Form.Label>
                <Form.Select
                    value={currentSelection}
                    onChange={changeCurrentSelection}
                >
                    {options.map((option: string) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <>{currentSelection === expectedAnswer ? "✔️" : "❌"}</>
        </div>
    );
}
