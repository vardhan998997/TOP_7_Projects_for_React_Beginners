import React, { useState, useEffect } from "react";

const RandomQuote = () => {
    const [quote, setQuote] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchQuote = async () => {
        setLoading(true);
        setError(null);

        try {
            const res = await fetch(" https://type.fit/api/quotes");
            if (!res.ok) {
                throw new Error("Failed to fetch quote");
            }
            const data = await res.json();
            setQuote(data.content);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchQuote();
    }, []);

    return (
        <div className="p-5 text-center">
            <h1 className="text-xl font-bold mb-4">Random Quote</h1>

            {loading && <p className="text-gray-500">Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}
            {!loading && !error && <p className="text-gray-700 mb-4">"{quote}"</p>}

            <button 
                onClick={fetchQuote} 
                className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
            >
                New Quote
            </button>
        </div>
    );
};

export default RandomQuote;

