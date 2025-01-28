import React, { useState } from 'react';

import './Button.css'

export default function Field() {
    // State to hold the text value
    const [text, setText] = useState("");

    // Handler to update text state on textarea change
    const handleOnchange = (event) => {
        setText(event.target.value);
    };

    // Function to capitalize all text
    const capitalClick = () => {
        setText(text.toUpperCase());
    };

    // Function to make all text lowercase
    const smallClicked = () => {
        setText(text.toLowerCase());
    };

    // Function to clear the text area
    const clearClicked = () => {
        setText("");
    };
    const removeSpaces = () => { 
        setText(text.replace(/\s+/g, " ").trim());
    }
    
    const copyToClipboard = () => {
        navigator.clipboard.writeText(text)
            .then(() => {
                alert("Text copied to clipboard!");
            })
            .catch((error) => {
                console.error("Error copying text: ", error);
            });
    }

    return (
        <>
            <div className="mb-3">
                <textarea
                    value={text}
                    className="form-control"
                    id="floatingTextarea"
                    rows={10}
                    onChange={handleOnchange}
                ></textarea>
                <div className="container text-center my-3">
                    <button title="Capitalize" onClick={capitalClick}>
                        Capitalize
                    </button>
                    <button title="Small" onClick={smallClicked}>
                        Small
                    </button>
                    <button title="Clear" onClick={clearClicked}>
                        Clear
                    </button>
                    <button title="Clear" onClick={removeSpaces}>
                        Remove Spaces
                    </button>
                    <button title="Clear" onClick={copyToClipboard}>
                        Copy to clipboard
                    </button>
                </div>
            </div>

            <div className="container my-3">
                <p><strong>Length of the Paragraph:</strong> {text.length}</p>
                <p>
                    <strong>Number of Words:</strong>{" "}
                    {text.trim().length > 0
                        ? text
                            .trim()
                            .split(/\s+/)           // Split by one or more spaces
                            .filter((word) => word) // Filter out empty strings
                            .length                 // Count the remaining words
                        : 0}
                </p>
            </div>
        </>
    );
}
