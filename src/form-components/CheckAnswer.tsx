import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [answer, changeAnswer] = useState<string>("");
    function newAnswer(event: React.ChangeEvent<HTMLInputElement>): void {
        changeAnswer(event.target.value);
    }

    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="formCheckAnswer">
                <Form.Label>You answered: </Form.Label>
                <Form.Control
                    value={answer}
                    onChange={newAnswer}
                    placeholder={"Enter something"}
                />
                {answer === expectedAnswer ? "✔️" : "❌"}
            </Form.Group>
        </div>
    );
}
