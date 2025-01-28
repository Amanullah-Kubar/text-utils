import React from 'react';

export default function About() {
    return (
        <div className="container my-3">
            <h2>About This Text Utility Software</h2>
            <p>
                Welcome to the Text Utility Software! This web-based tool is designed to help you perform
                various text-related tasks quickly and efficiently. Whether you're looking to manipulate 
                text for writing, formatting, or analysis, this tool provides an easy-to-use interface 
                to meet your needs.
            </p>
            <h4>Features:</h4>
            <ul>
                <li><strong>Capitalize:</strong> Convert all text to uppercase.</li>
                <li><strong>Small:</strong> Convert all text to lowercase.</li>
                <li><strong>Clear:</strong> Clear the text input field.</li>
                <li><strong>Remove Extra Spaces:</strong> Trim extra spaces and normalize multiple spaces to a single one.</li>
                <li><strong>Text Length:</strong> Get the length of the text in characters.</li>
                <li><strong>Word Count:</strong> Count the number of words in the text.</li>
            </ul>
            <h4>How to Use:</h4>
            <p>
                Simply enter your text in the provided text area. Then, use the buttons above to 
                manipulate the text as needed. You can capitalize or lowercase your text, remove 
                extra spaces, or clear the text area completely. The application will also show the 
                length of the text and the word count.
            </p>
            <p>
                This tool is perfect for writers, developers, and anyone who works with text on a 
                daily basis. It is simple, fast, and efficient.
            </p>
        </div>
    );
}
