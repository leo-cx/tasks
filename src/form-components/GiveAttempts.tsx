import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [remainingAttempts, setRemainingAttempts] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<number>(0);

    function changeRequestedAttempts(
        event: React.ChangeEvent<HTMLInputElement>
    ): void {
        !isNaN(parseInt(event.target.value))
            ? setRequestedAttempts(parseInt(event.target.value))
            : setRequestedAttempts(0);
    }
    return (
        <div>
            <h3>Give Attempts</h3>
            <>Remaining attempts: {remainingAttempts}</>
            <Form.Group controlId="formGiveAttempts">
                <Form.Label>How many more attempts?</Form.Label>
                <Form.Control
                    type="number"
                    onChange={changeRequestedAttempts}
                />
            </Form.Group>
            <Button
                onClick={() => setRemainingAttempts(remainingAttempts - 1)}
                disabled={!remainingAttempts}
            >
                Use
            </Button>
            <Button
                onClick={() =>
                    setRemainingAttempts(remainingAttempts + requestedAttempts)
                }
            >
                Gain
            </Button>
        </div>
    );
}
