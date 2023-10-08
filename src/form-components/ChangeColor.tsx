import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const colors = [
        "red",
        "orange",
        "yellow",
        "green",
        "blue",
        "indigo",
        "violet",
        "teal"
    ];
    const [currentColor, setCurrentColor] = useState<string>("red");
    function changeColor(event: React.ChangeEvent<HTMLInputElement>) {
        setCurrentColor(event.target.value);
    }
    return (
        <div>
            <h3>Change Color</h3>
            <Form.Group controlId="formChangeColor">
                <Form.Label>Colors:</Form.Label>
                {colors.map((color: string) => (
                    <Form.Check
                        type="radio"
                        name="colors"
                        key={color}
                        onChange={changeColor}
                        id={"color: " + color}
                        label={
                            <span style={{ backgroundColor: color }}>
                                {color}
                            </span>
                        }
                        value={color}
                        inline={true}
                        checked={color === currentColor}
                    />
                ))}
            </Form.Group>
            <>
                You have chosen{" "}
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: currentColor }}
                >
                    {currentColor}
                </span>
            </>
        </div>
    );
}
