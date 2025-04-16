import React, { useEffect, useState } from 'react';
import newsApi from '../services/api';

const TestConnection = () => {
    const [status, setStatus] = useState('Testing connection...');

    useEffect(() => {
        const testBackend = async () => {
            try {
                const response = await newsApi.testConnection();
                setStatus('Connected to backend successfully!');
            } catch (error) {
                setStatus('Failed to connect to backend. Error: ' + error.message);
            }
        };

        testBackend();
    }, []);

    return (
        <div>
            <h3>Backend Connection Status:</h3>
            <p>{status}</p>
        </div>
    );
};

export default TestConnection;