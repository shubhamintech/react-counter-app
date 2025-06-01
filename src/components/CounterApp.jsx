import React, {useState} from 'react';

function CounterApp(){

    const [count, setCount] = useState(0);

    const handleDecrement = () => {
        setCount(count - 1);
    };

    const handleIncrement = () => {
        setCount(count  + 1);
    };

    const handleReset = () => {
        setCount(0);
    };

    return(
        <>
            <div style={styles.container}>
                <h1 style={styles.title}>🧮 Counter App</h1>

                <div style={styles.counterWrapper}>
                    <button onClick={handleDecrement} style={styles.button}>−</button>

                    <div style={styles.counterDisplay}>
                        {count}
                    </div>

                    <button onClick={handleIncrement} style={styles.button}>+</button>
                </div>

                <button onClick={handleReset} style={styles.resetButton}>Reset</button>
            </div>
        </>
    );
}


const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#f4f4f4',
        fontFamily: 'Arial, sans-serif',
    },
    title: {
        fontSize: '3rem',
        color: '#333',
        marginBottom: '40px',
    },
    counterWrapper: {
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        marginBottom: '20px',
    },
    button: {
        fontSize: '2rem',
        padding: '10px 20px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        transition: 'background 0.3s',
    },
    counterDisplay: {
        fontSize: '2rem',
        padding: '10px 30px',
        borderRadius: '10px',
        backgroundColor: '#fff',
        border: '2px solid #ccc',
        minWidth: '80px',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    resetButton: {
        marginTop: '20px',
        fontSize: '1rem',
        padding: '8px 16px',
        backgroundColor: '#f44336',
        color: 'white',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
        transition: 'background 0.3s',
    },
};


export default CounterApp;