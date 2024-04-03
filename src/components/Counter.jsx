import { useState, useEffect } from 'react';

function Counter() {
    const [number, setNumber] = useState(0);

    useEffect(() => {
        console.log("Component Mount");
        const ınterval =        setInterval(() => {
            setNumber((n) => n+1)
        },1000);

        return () =>{ 
            clearInterval(ınterval);
            console.log( "Component Unmount" );
        }
    },[])
    useEffect(() => {
        console.log(`Number state changed`);
    }, [number]);

    const incrementNumber = () => {
        setNumber(number + 1);
    };

    return (
        <>
            <h3>UseEffect -LifeCycle</h3>
            <hr />
            <p>{number}</p>
            <button onClick={incrementNumber}>Increment</button>

        </>
    );
}

export default Counter;
