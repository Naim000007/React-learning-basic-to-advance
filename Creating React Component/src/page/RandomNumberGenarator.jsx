import React, { useState } from 'react';

const RandomNumberGenarator  = () => {
    const [randomNumber, setRandomNumber] = useState(null);

    const generateRandomNumber = () => {
        const newNumber = Math.floor(Math.random() * 100);
        setRandomNumber(newNumber);
    };

    return (
        <div>
            <button onClick={generateRandomNumber}>Click Here</button>
            {randomNumber !== null && <h1>Random Number is {randomNumber}</h1>}
        </div>
    );
};

export default RandomNumberGenarator;
